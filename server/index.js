const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 5000

//Import Routes
const groceryRoutes = require('./routes/Grocery')


//JSON MIDDLEWARE
app.use(express.urlencoded({extended: true}));  //without this below code will not work
app.use(express.json()) // To parse the incoming requests with JSON payloads

//Routes
app.use('/grocery', groceryRoutes)

//SET UP MONGOOSE CONNECTION
mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true})   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));


//LISTEN TO PORT 
app.listen(PORT, ()=>{
    console.log("app runnng....")
})