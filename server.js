//express setup
const express = require('express');
const app = express();
const path = require('path')

//dotenv setup
const dotenv = require('dotenv');
dotenv.config({path:'config.env'})
//port setup
const port = process.env.PORT || 1000;

//setup for ejs template engines
app.set("view engine","ejs")

//body-parser must while using database
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//mongodb connection
const connectDB = require('./server/database/connection')
connectDB();

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// app.use(express.static(path.resolve(__dirname, "assets")))

//load Routers
app.use('/',require('./server/routes/router'))



app.get('/',(req,res)=>{
    res.render("index")
})


//listening port
app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`)
})