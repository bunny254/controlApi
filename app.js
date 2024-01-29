//Importing all depedencies
const express = require("express");
const app = express();
const cors=require('cors');
const connectDb = require("./db/connectDb");

/*
const whitelist = ['https://dynamic-jelly-061c37.netlify.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
*/

//Middleware methods request
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//environment variables
require("dotenv/config");
const port = process.env.PORT || 3500;
const url = process.env.MONGO_URI;

//Router imports
const orderRoute=require("./routes/order");

//Routes
app.get('/', (req,res)=>{
  res.send("Welcome to the control orders back-end api")
})
app.use('/api/',orderRoute);


//Start Server
const startServer = async () => {
    try {
      connectDb(url);
      app.listen(port, () => {
        console.log(`App is successfully Listening on ${port}...`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();