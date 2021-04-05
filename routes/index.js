const express = require('express');
const router = express.Router();
const verifyToken = require("../middleware/authorization");

const authRouter = require('./auth');
const userRouter = require('./user.controller');
const likeRouter = require('./like.controller');
const commentRouter = require('./comment.controller');
const imageRouter = require('./image.controller');

router.use('/auth', authRouter);

router.use('/user', userRouter);

router.use('/image', imageRouter);
router.use('/comment', commentRouter);
router.use('/like', verifyToken, likeRouter);
// router.use(verifyToken);

module.exports = router;