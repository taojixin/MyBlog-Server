const express = require('express')
const commentRouter = express.Router()

const {
  create,
  giveLike
} = require('../controller/comment.controller')

// 发表评论
commentRouter.post('/create', create)
// 点赞
commentRouter.get('/givelike', giveLike)


module.exports = commentRouter;