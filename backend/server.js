
require('dotenv').config()

// import all required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./FarmerRoute.js');
const addEmployee = require("./routes/FarmerEmployeeRouter");

// // database connectivity
// mongoose.connect('mongodb+srv://disira:12345@cluster0.ubc50l6.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology : true, useNewUrlParser : true })
//     .then(()=>{console.log('connected to database')})
//     .catch(err=>{console.log('Error in database connectivity',err)});

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })



const app = express();
// app.listen(8000);

app.use(cors());
app.use(express.json({extended : true}));
app.use('/api/famerEmp', router);
app.use('/api/farmerEmployee', addEmployee)
