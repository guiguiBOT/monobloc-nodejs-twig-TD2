const express = require('express')
const mongoose = require('mongoose')
const mainRouter = require('./routers/mainRouter')
require('dotenv').config()
const app = express()
app.use(mainRouter)
app.listen(process.env.PORT, (err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("connecté au serveur");
    }
})

mongoose.connect(process.env.URIBDD)