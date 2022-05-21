const {getIntroduce, updateData} = require('../service/introduce.service')
class IntroduceController {
  // 获取个人介绍接口
  async getIntroduce(req, res, next) {
    const queryKey = req.body.queryKey
    const data = await getIntroduce(queryKey)
    res.json(data)
  }
  // 修改个人介绍接口
  async updateIntroduce(req, res, next) {
    const queryKey = req.body.queryKey
    const data = req.body.updateData
    const result = await updateData(queryKey, data)
    res.json('修改成功！')
  }
}

module.exports = new IntroduceController();