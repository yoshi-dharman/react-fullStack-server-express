const express = require('express');
const { Like } = require('../models/');

const app = express();

app.get('/', (req, res) => {
    Like.find({}, "-__v")
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.get('/:id', (req, res) => {
    Like.find(
        {"_id": req.params.id}
    )
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.post('/', (req, res) => {
    Like.create(req.body)
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.delete('/:id', (req, res) => {
    Like.delete(
        {"_id": req.params.id}
    )
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
})

module.exports = app;