const service = require('../service/demo.service')

class DemoController {
  // 获取demo相关信息
  async getDemo(req, res,next) {
    const getId = req.body.getId
    const data = await service.getDemo(getId)
    res.json(data)
  }
  // 添加demo
  async addDemo(req, res, next) {
    const addMessage = req.body.addMessage
    await service.addDemo(addMessage)
    res.json("添加成功！")
  }
  // 删除demo
  deleteDemo(req, res, next) {
    const demoId = req.body.demoId
    service.deleteDemo(demoId)
    res.json("删除成功！")
  }
}


module.exports = new DemoController();