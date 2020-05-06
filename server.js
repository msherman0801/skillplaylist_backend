require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const uri = process.env.ATLAS_URI
const connection = mongoose.connection
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;

app.use(cors());
app.use(express.json());
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true })

connection.once('open', () => {
    console.log(`MongoDB has succesfully connected`)
})

app.listen(port, () => {
    console.log(`Server  is running on ${port}.`)
})