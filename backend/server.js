const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware  
app.use(cors()); 
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true}); 
 
const {connection} = mongoose;
connection.once('open',()=> {
    console.log("MongoDB connection established");
})

const exercisesRouter = require('./routes/exercises') 
const usersRouter = require('./routes/users') 

app.use('/exercises',exercisesRouter); 
app.use('/users',usersRouter);
  
// listen port
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});