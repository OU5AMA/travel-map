const router = require('express').Router();

const User = require('../models/User');

router.post("/", async (req, res)=>{
    const newUser = new User(req, res);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);    
    } catch (error) {
        res.status(500).json(error);
    }
})