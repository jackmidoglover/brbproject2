const passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
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

router.post("/signup", (req, res) => {
    const password = req.body.password;
    const password2 = req.body.password2;
    if (password === password2) {
        bcrypt.hash(password, saltRounds, function(err, hash) {
            db.Users.create({
                UserName: req.body.username,
                Name: req.body.name,
                UserPassword: hash,
                Zipcode: req.body.zip,
                Email: req.body.email 
            }).then(function(saved){
                res.render("signup", {title: "Registration Complete!"});
            }).catch(function(err){
                res.render("signup", {title: "Registration error", error : "We were unable to register you. Please check to see that all fields are filled."})
            })
        });
    }
    else {
        res.render("signup", {title: "Registration error", error: "Passwords do not match."})
    }
})



module.exports = router;