const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 2,
        max: 10
    },
    confirmPassword: {
        type: String,
        require: true, 
        min: 2,
        max: 10
    }
},{
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);