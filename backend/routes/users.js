const router = require('express').Router();

const User = require('../models/User');

// register
router.post("/register", async (res, req) => {
    try {
        // generate new passowrd
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash()
        // create new user
        const newUser = new User({
            username: res.body.username,
            email: res.body.email,
            possword: hashedPassword,
        });

        // save user and send response
        const user = await newUser.save();
        res.status(200).json(user._id);
    } catch (error) {

    }
})


// login
router.post("/login", async (req, res)=>{
    try {
        // find user
        const user = await User.findOne({username})
        !user && res.status(400).json("Wrong username or password")

        // validate password
        const validPassword = await bcrypt.compare(
            req.body.password, 
            user.password 
            );
        
        // send response
        res.status(200).json({_id:user._id, username: username});
    } catch (error) {
        
    }
})


module.exports = router