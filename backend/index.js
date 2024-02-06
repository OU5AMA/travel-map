const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");



app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    try {
        res.status(200).json({"message": "you're on the UI"});
    } catch (error) {
        console.log(error);
    }
})




app.listen(3000, ()=>{
    console.log("you're listening to port 3000, SUCCESSFULLY")
})