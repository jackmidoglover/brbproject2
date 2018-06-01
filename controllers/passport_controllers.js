const passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

require('dotenv').config();
// const users = require('../models/users');
let express = require('express');
let router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.get("/signup", (req, res) => {
        console.log("signup hit");
        res.render("signup", {title: "Registration"});
    })

router.post("/signup",(req, res) => {
    let password = req.body.password;
    let password2 = req.body.password2;
    if (password === password2) {
        bcrypt.hash(password, saltRounds, function(err, hash) {
            db.Users.create({
                UserName: req.body.username,
                Name: req.body.name,
                UserPassword: hash,
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
                        if (err) throw err;
                        res.redirect('/');
                    });
            });
            }).catch(function(err){
                res.render("signup", {title: "Registration error", error : "We were unable to register you. Please check to see that all fields are filled."})
            })
        });
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
      res.render("login");
  })

router.post("/login", passport.authenticate("local"), (req,res) => {
    let password = req.body.password;
    let password2 = req.body.password2;
    if (password === password2) {
        res.redirect("/");
    }
})


module.exports = router;