const express = require('express')
const demoRouter = express.Router()

const {
  getDemo,
  addDemo,
  deleteDemo
} = require('../../controller/demo.controller')

// 获取demo相关信息
demoRouter.post('/getdemo', getDemo)
// 添加demo
demoRouter.post('/adddemo', addDemo)
// 删除demo
demoRouter.delete('/deldemo', deleteDemo)


module.exports = demoRouter