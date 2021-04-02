require('dotenv').config();

const mongoose = require('mongoose');
const MONGODB_LIVE = process.env.MONGODB_LIVE;

mongoose.connect(MONGODB_LIVE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbConfigMongo = mongoose.connection;

module.exports = {
    PORT: process.env.PORT,
    JWT_KEY: process.env.JWT_KEY,
    MONGODB_LIVE,
    dbConfigMongo
}