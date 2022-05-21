const express = require('express')
const introduceRouter = express.Router()

const {
  getIntroduce,
  updateIntroduce
} = require('../../controller/introduce.controller')

// 查询个人信息
introduceRouter.get('/getintroduce', getIntroduce)
// 修改个人信息
introduceRouter.post('/updateintroduce',updateIntroduce)



module.exports = introduceRouter;