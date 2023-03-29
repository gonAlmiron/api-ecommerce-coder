import {Router} from 'express'
import { loginController, signUpController } from '../controllers/users.controller';
import passport from 'passport';
import { passportOptions } from '../services/users.services';

const router = Router();

router.post( '/login', passport.authenticate('login', passportOptions), loginController) ;
router.post('/signup', signUpController);

export default router;