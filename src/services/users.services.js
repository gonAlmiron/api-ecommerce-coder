import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../persistence/daos/dao-MongoDB/schemas/user'
import logger from '../logs/logger';
import UserAPI from '../api'
import UsersRepository from '../persistence/repository/users.repository';

// CONFIGURACION DE PASSPORT:
const strategyOptions = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
};

export const passportOptions = { 
  badRequestMessage: 'Falta username / password'
 };


const login = async (req, username, password, done) => {
  try {
    const user = await UserAPI.find(username)
    if (!user) {
      return done(null, false, { mensaje: 'Usuario no encontrado' });
    } else {
      const match = await user.matchPassword(password)
      match ? done(null, user) : done(null, false)
    }
    logger.info("ENCONTRE UN USUARIO", user)
  } catch (err) {
    logger.info(err);
    logger.info(err.stack)
  }
};

const signup = async (req, username, password, done) => {

  logger.info('SIGNUP!!');
  try {
    const {username, password} = req.body
    const newUser = await UserAPI.create({ username, password });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    logger.info(newUser)
    return done(null, newUser);

  } catch (err) {
    logger.info('Hubo un error!');
    logger.info(err);
    return done(null, false, { mensaje: 'Error Inesperado', err });
  }
};

export const getAllUsers = async () => {
  const users = await UsersRepository.getAll();
  return users
}


export const loginFunc = new LocalStrategy(strategyOptions, login);
export const signUpFunc = new LocalStrategy(strategyOptions, signup);



passport.serializeUser((user, done) => {
  logger.info('Se Ejecuta el serializeUser');
  done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
  logger.info('Se Ejecuta el desserializeUser');
  user = await UserModel.findById(userId).then((user) => {
    return done(null, user);
  })
});