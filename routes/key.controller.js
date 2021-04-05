const express = require('express');
const app = express();
require('dotenv').config();

app.get('/imgbb', (req, res) => {
    res.send({
        imgbb_key : process.env.IMGBB_KEY
    })
});

module.exports = app;