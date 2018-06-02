var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "username",
    passReqToCallback: true,
  },
  function(req, username, password, done) {
    // When a user tries to sign in this code runs
    let password1 = req.body.password;
    let password2 = req.body.password2;
    db.Users.findOne({
      where: {
        username: username
      }
    }).then(function(Users) {
      // If there's no user with the given email
      if (!Users) {
        console.log("username not working");
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!Users.validatePassword(password1)) {
        console.log("password not working")
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      if (password1 === password2) {
        console.log("authenticated");
      return done(null, Users);
      }
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
