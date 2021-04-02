const express = require('express');
const { Comment } = require('../models/');

const app = express();

app.get('/', (req, res) => {
    Comment.find({}, "-__v")
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

// app.get('/', (req, res) => {
//     Comment.find({}, "-__v")
//     .then(result => res.send(result))
//     .catch(e => res.status(500).send(e));
// });

app.get('/:id', (req, res) => {
    Comment.find(
        {"_id": req.params.id}
    )
    .then(result => {
        // console.log(result[0].time.getSeconds())
        res.send(result)
    })
    .catch(e => res.status(500).send(e));
});

app.post('/', (req, res) => {
    Comment.create(req.body)
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.delete('/:id', (req, res) => {
    Comment.delete(
        {"_id": req.params.id}
    )
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

module.exports = app;