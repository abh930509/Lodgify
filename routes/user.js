const express = require("express");
const { route } = require("./listing");
const router = express.Router();
const userControllers = require("../controllers/users.js");

const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
let { saveRedirectUrl } = require("../middleware.js");

router
  .route("/signup")
  .get(userControllers.SignUpForm)
  .post(wrapAsync(userControllers.SignUp));

router
  .route("/login")
  .get(userControllers.loginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userControllers.login
  );

router.get("/logout", userControllers.logOut);

module.exports = router;
