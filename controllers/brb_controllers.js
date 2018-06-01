var db = require("../models");
var passport = require("../config/passport");
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
    });


router.post('/api/bikes', (req, res) => {
   
});

router.post('/api/bikes/:id', (req, res) => {
   
});

module.exports = router;