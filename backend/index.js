const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

app.use(express.json());



mongoose
  .connect(process.env.URI)
  .then(()=>{
    console.log("your DB is connected");
  })
  .catch((error)=>{
    console.log(error);
  })
  .finally(()=>{
    // close the DB connection
    mongoose.disconnect()
  })

app.use("api/pins", pinRoute );
app.use("api/users", userRoute);


app.listen(process.env.PORT | 8800, ()=>{
  console.log("you're listening to port: ", process.env.PORT);
})