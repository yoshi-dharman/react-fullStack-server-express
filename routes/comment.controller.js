const express = require('express');
const { Comment } = require('../models/');

const app = express();


// Comment.find({}, "-__v").sort({time: 1})
app.get('/', (req, res) => {
    Comment.find({}, "-__v")
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

app.get('/byimage/:id', (req, res) => {
    Comment.find(
        {"image_id" : req.params.id}
    , "-__v").populate("user_id", "-__v -password").sort({time: 1})
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

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
    Comment.deleteOne(
        {"_id": req.params.id}
    )
    .then(result => res.send(result))
    .catch(e => res.status(500).send(e));
});

module.exports = app;