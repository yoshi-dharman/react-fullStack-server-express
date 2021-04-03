const express = require('express');
const { User } = require('../models/');

const app = express();

app.get('/', (req, res) => {
    User.find({}, "-__v")
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.get('/name/:name', (req, res) => {
    User.find(
        {"name": req.params.name}
    )
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
})

app.get('/:id', (req, res) => {
    User.find(
        {"_id": req.params.id}
    )
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.post('/', (req, res) => {
    User.create(req.body)
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.delete('/:id', (req, res) => {
    User.deleteOne(
        {"_id": req.params.id}
    )
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
})

module.exports = app;