const express = require('express');
const { Image } = require('../models/');

const app = express();

app.get('/', (req, res) => {
    Image.find({}, "-__v")
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.get('/:id', (req, res) => {
    Image.find(
        {"_id": req.params.id}
    )
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.post('/', (req, res) => {
    Image.create(req.body)
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.delete('/:id', (req, res) => {
    Image.delete(
        {"_id": req.params.id}
    )
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
})

module.exports = app;