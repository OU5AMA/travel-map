const router = require("express").Router();
const Pin = require("../models/Pin");

// create a pin

router.post("/", async (req, res)=>{
    const newPin = new Pin(req, res);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (error) {
        res.status(500).json(error);
    }
}) 

// get all pins
router.get("/", async (req, res)=>{
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (error) {
        res.status(500).json(error)
    }
})

// get A pin
// router.get("/{$id}", async (req, res)=>{
//     try {
//         req.body($path: id)
//         const pin = await Pin.findById();
//         res.status(200).json(pin)
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

module.exports = router