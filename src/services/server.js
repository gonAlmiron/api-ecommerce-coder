import express from 'express';
import cors from 'cors'
import MongoStore from 'connect-mongo';
import Config from '../config';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import mainRouter from '../routes';
import { loginFunc, signUpFunc } from './users.services';
import passport from 'passport';
import logger from '../logs/logger';
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql';
import {graphqlRoot, graphqlSchema} from './graphQL/products.services.js'
import { info } from '../docs/info';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import http from 'http';
import io from 'socket.io';
import compression from 'compression';
import { ensureLoggedIn } from "connect-ensure-login";

const app = express()
app.use(express.json())

// CONFIGURACION DE GRAPHQL
app.use(
  '/graphql',
  graphqlHTTP({     
    schema: graphqlSchema,  
    rootValue: graphqlRoot, 
    graphiql: true, 
  })
);

// DOCUMENTACION
const specs = swaggerJSDoc(info)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))


// CONFIGURACION SESSIONS DEL USUARIO
const ttlSeconds = 1800;
const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: Config.MONGO_ATLAS_URL,
    crypto: {
      secret: 'squirrel',
    },
  }),
  secret: 'shhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

app.use(session(StoreOptions));
const mySecret = 'mySecret';

app.use(cookieParser(mySecret));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors())
app.use("/api", mainRouter);
app.use(compression())


//Indicamos que vamos a usar passport en todas nuestras rutas
app.use(passport.initialize());

//Permitimos que passport pueda manipular las sessiones de nuestra app
app.use(passport.session());

// Cuando un usuario se autentique correctamente, passport va a devolver en la session la info del usuario
passport.use('login', loginFunc);

//signUpFunc va a ser una funcion que vamos a crear y va a tener la logica de registro de nuevos usuarios
passport.use('signup', signUpFunc);


// AUTENTICACION CON GOOGLE:

app.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/oauth2/redirect/accounts.google.com', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});


app.get("/", ensureLoggedIn(), (req, res) => {
  res.send(`
            <h1>Bienvenido ${req.user.displayName}!</h1>
            `);
  logger.info(req.sessionID);
  logger.info(req.session);
  logger.info(req.user);
});

app.post("/logout", (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }})
  res.redirect("http://localhost:3000/login");
});

// PREPARACION WEBSOCKETS PARA CHAT

const myHTTPServer = http.Server(app)


const socketIO = io(myHTTPServer, {
  cors: {
      origin: '*'
  }
})

socketIO.on('connection', (socket) => {


  socket.on('message', (message, username) => {
      logger.info(message)
      //Envio al resto de clientes con broadcast.emit
      socket.broadcast.emit('message', {
          body: message,
          from: username
      })
  })
  socket.on('disconnect', () => {
    logger.info('🔥: A user disconnected');
    socket.disconnect();
  });
})


// MIDDLEWARE DE ERRORES
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({
    error: 'an error occurred',
    msg: err.stack
  });
});

export default myHTTPServer;