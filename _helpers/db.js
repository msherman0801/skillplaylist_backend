const config = require('../environments/config');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.ATLAS_URI, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user')
};