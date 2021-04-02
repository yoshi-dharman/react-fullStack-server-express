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

router.use('/like', likeRouter);
router.use('/comment', commentRouter);
router.use('/image', imageRouter);
// router.use(verifyToken);

module.exports = router;