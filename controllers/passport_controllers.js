const passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
require('dotenv').config();
const users = require('../models/users');
const express = require('express');
const router = express.Router();

router.get("/signup", function(req,res){
        return res.render("signup");
    })


module.exports = router;