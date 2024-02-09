const router = require('express').Router();

const User = require('../models/User');

// create a new user
router.post("/", async (req, res)=>{
    const newUser = new User(req, res);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);    
    } catch (error) {
        res.status(500).json(error);
    }
})

// get all users
router.get('/', async (req, res)=>{
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router