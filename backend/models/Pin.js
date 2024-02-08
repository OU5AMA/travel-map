const mongoose = require('mongoose');

const PinSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        }, 
        disc: {
            type: String,
            min: 5,
            max: 30
        },
        rating: {
            type: Number,
            min: 0,
            max: 5
        },
        lat: {
            type: Number,
            require: true
        },
        long: {
            type: Number,
            require: true
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);  