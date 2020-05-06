require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/errorHandler');
const uri = process.env.ATLAS_URI
const connection = mongoose.connection
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const mainRoutes = require('./controllers/index')
app.use(cors());
app.use(express.json());
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true })

connection.once('open', () => {
    console.log(`MongoDB has succesfully connected`)
})

// use JWT auth to secure the api
// app.use(jwt());

// api routes
mainRoutes(app);

// global error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server  is running on ${port}.`)
})