import {Router} from 'express'
import { loginController, signUpController, getAllController } from '../controllers/users.controller';
import passport from 'passport';
import { passportOptions } from '../services/users.services';

const router = Router();

router.post( '/login', passport.authenticate('login', passportOptions), loginController) ;
router.post('/signup', signUpController);
router.get("/google", passport.authenticate("google"));
router.get("/oauth2/redirect/accounts.google.com",
  passport.authenticate("google", { assignProperty: "User", failureRedirect: "/login" }),

  (req, res, next) => {
    console.log(req.User);
    const user = {
      displayName: req.User.displayName,
      photo: req.User.photos[0].value,
    };
    req.login(user, (err) => {
      if (err) {
        return next(err);
      } else {
        res.redirect("/");
      }
    });
  }
);


export default router;