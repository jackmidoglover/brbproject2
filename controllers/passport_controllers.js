const passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

require('dotenv').config();
let express = require('express');
let router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;



router.get("/signup", (req, res) => {
        console.log("signup hit");
        if(req.user){
            res.redirect("/");
        }
        res.render("signup", {title: "Registration"});
    })

router.post("/signup",(req, res) => {
    let password = req.body.password;
    let password2 = req.body.password2;
    if (password === password2) {
            db.Users.create({
                username: req.body.username,
                Name: req.body.name,
                password: password,
                Zipcode: req.body.zip,
                Email: req.body.email 
            }).then(function(saved){
                db.Users.findAll({
                    where: {
                        id: saved.dataValues.id
                    }
                }).then((user) => {
                    const user_id = user[0].dataValues.id;
                    console.log(user_id);
                    req.login(user_id, function(err){
                        if (err) console.log (err);
                        res.redirect('/');
                    });
            });
            }).catch(function(err){
                res.render("signup", {title: "Registration error", error : "We were unable to register you. Please check to see that all fields are filled."})
            })
    }
    else {
        res.render("signup", {title: "Registration error", error: "Passwords do not match."})
    }
});

passport.serializeUser(function(user_id, done) {
    console.log('serialized');
    done(null, user_id);
  });
   
  passport.deserializeUser(function(user_id, done) {
      db.Users.findAll({
          where: {
              id: user_id
          }
      }).then(function(user){      
          done(null, user_id);
        })
  });

  router.get("/login", (req,res) => {
      console.log("login hit");
      if (req.user){
          res.redirect("/");
      }
      else{
      res.render("login");
      }
  })

router.post("/login", passport.authenticate("local", {failureRedirect: "/login"}), (req,res) => {
            res.redirect("/");
        console.log("passwords match hit");

});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
})

module.exports = router;