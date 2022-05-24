const connections = require('../app/database')
class DemoService {
  // 获取demo相关信息
  async getDemo(id) {
    if (id === 0) {
      const statement =  `SELECT * FROM demo;`
      const data = await connections.execute(statement)
      return data[0]
    } else {
      const statement = `SELECT * FROM demo WHERE id=?;`
      const data = await connections.execute(statement,[id+''])
      return data[0][0]
    }

  }
  // 添加demo
  addDemo(message) {
    const {id,describe,knowledge,code,time} = message
    const statement = `INSERT INTO demo(user_id,demo_describe,demo_knowkedge,demo_code,demo_createtime) VALUES(?,?,?,?,?);`
    const data = connections.execute(statement,[id,describe,knowledge,code,time])
    return data
  }
  // 删除demo
  async deleteDemo(demoId) {
    const statement = `DELETE FROM demo WHERE id = ?;`
    const data = await connections.execute(statement, [demoId])
    return data
  }
  // 修改demo
  async modifyDemo(demoId,demo_describe,demo_knowledge,demo_code) {
    const statement = `UPDATE demo SET demo_describe=?,demo_knowkedge=?,demo_code=? WHERE id=?;`
    const data = await connections.execute(statement, [demo_describe,demo_knowledge,demo_code,demoId])
    return data
  }
}

module.exports = new DemoService();