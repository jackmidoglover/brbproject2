const passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
require('dotenv').config();
// const users = require('../models/users');
let express = require('express');
let router = express.Router();

router.get("/signup", (req, res) => {
        console.log("signup hit");
        res.render("signup", {title: "Registration"});
    })


module.exports = router;