const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const userController = require('./routes/userRoute');

//MIDDLEWARE
app.use(express.json());
app.use('/user',userController);

//DABASE SETUP

mongoose.connect(config.database, { useNewUrlParser: true,useUnifiedTopology: true} ,
    ()=>{
    console.log('mongodb connected')
})

//SERVER SETUP
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`server is running on port: ${port}`));