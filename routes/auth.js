const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const {JWT_KEY} = require('../config/db');

router.post('/register', (req, res) => {
    const user = req.body;

    bcrypt.hash(user.password, 10)
    .then(hashPassword => {
        if(!hashPassword) throw new Error("error hash passwword")

        User.create({
            name: user.name,
            password: hashPassword
        })
        .then(result => {
            res.send({
                message: "sucess register",
                data: result
            })
        })
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
});

router.post('/login', (req, res) => {
    const {name, password} = req.body;

    User.findOne({name})
    .then(result => {
        if(result && bcrypt.compareSync(password, result.password)){
            const {password, ...payload} = result.toObject();

            const token = jwt.sign(payload, JWT_KEY);
            res.send({
                message: "success login",
                data: payload,
                token
            });
        } else{
            res.send({
                message: "login failed, email or pass invalid"
            });
        }
    })
    .catch(e => console.log(e));
})

module.exports = router;