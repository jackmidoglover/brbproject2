var db = require("../models");
var passport = require("../config/passport");
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.user);
    console.log(req.isAuthenticated());
    return res.render("home");
});


//create bike
app.post('/api/bikes', (req, res) => {
    db.Bikes.create({
        Make: req.body.make,
        Model: req.body.model,
        Color: req.body.color,
        SerialNumber: req.body.serial,
        ImageURL: req.body.picture
    })
        .then(bikes => res.json(bikes))
})
//mark bike stolen
app.put('/api/bikes/stolen', (req, res) => {
    db.bikes.update({
        DateStolen: req.body.date,
        LocationStolen: req.body.location,
        TimeStolen: req.body.time,
        Reward: req.body.reward
    })
        .then(bikes => res.json(bikes))
})



//find bike belonging to user
app.get('/api/bikes/:userId?', (req, res) => {
    console.log(req.body.user_id);
    db.Bikes.findAll ({
        where: {
            id: req.body.user_id    
        }
    }).then(bikes => res.json(bikes))
})

//delete bike
app.delete('/api/bikes', (req, res) => {
    db.Bikes.destroy(req.body)
        .then(bikes => res.json(bikes))
})
module.exports = router;



