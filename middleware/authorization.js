const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const { JWT_KEY } = require('../config/db');

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization;

    if(!header){
        res.json({
            message: "no token to access"
        })
    } else{

    const token = header.split(" ")[1];
    if(!token) throw new Error("invalid token");
    const payload = jwt.verify(token, JWT_KEY);

    req.payload = payload;
    }
    next();
}

module.exports = verifyToken;