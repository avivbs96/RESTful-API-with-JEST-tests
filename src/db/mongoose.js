const mongoose = require('mongoose')
require('dotenv').config();

mongoConnection = mongoose.connect(process.env.MONGO_URL)

module.exports = mongoConnection