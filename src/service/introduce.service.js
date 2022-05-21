const connections = require('../app/database')
class IntroduceService {
  // 获取个人介绍接口
  async getIntroduce(queryKey) {
    if (queryKey === 'all') {
      const statement1 = `SELECT * FROM introduce;`
      const data = await connections.execute(statement1)
      return data[0][0]
    } else {
      const statement2 = `SELECT ${queryKey} FROM introduce;`
      const data = await connections.execute(statement2)
      return data[0][0]
    }
  }
  // 修改个人介绍接口
  async updateData(queryKey, updateData) {
    const statement = `UPDATE introduce SET ${queryKey}=? WHERE my_id=1;`
    const data = await connections.execute(statement, [updateData])
    return data
  }
}

module.exports = new IntroduceService();