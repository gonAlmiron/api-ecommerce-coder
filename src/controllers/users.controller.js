import passport from 'passport';
import logger from '../logs/logger.js';
import { transporter } from '../services/notifications/notifications.js';
import { passportOptions, getAllUsers } from '../services/users.services.js';

export const signUpController = (req, res, next) => {
  
  try {
      passport.authenticate('signup', passportOptions, (err, user, info) => {
      logger.info('Info SIGNUP');
      logger.info(err, user, info);
      if (err) {
        return next(err);
      }
      if (!user) return res.status(401).json(info);
  
      
        logger.info(`Se registró un usuario: ${user.username} \n\n. Ruta /SIGNUP. Metogo POST`)
// ENVIANDO EMAIL AL USUARIO AL REGISTRARSE
        transporter.sendMail({
          from: process.env.EMAIL,
          to: user.username,
          subject: 'Gracias por Registrarte en E-commerce Hardware',
          html: '<div> <h1>Gracias por registrarte!</h1> <p> Ya podes hacer la compra de tus productos en la web </p> </div>'
        })

      res.json({ 
        msg: 'signup OK',
        user: user });

      })(req, res, next);

  } catch (error) {
    logger.error(error.message)
    logger.error(error.stack)
  }
  }

export const loginController = (req, res) => {
  try {
    logger.info(`Se logeó un usuario. Ruta /LOGIN. Metogo POST`)
    res.status(200).json( {
      msg: `Login OK!!`,
      user: req.user
    })
  } catch (error) {
    res.status(501).send(error.message)
  }
    }

export const getAllController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users)
  } catch (error) {
    res.status(501).send(error.message, error.stack)
  }
}

