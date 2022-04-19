
const connections = require('../app/database')

class CommentService {
  // 发表评论
  async create(name, time, note) {
    const statement = `INSERT INTO comments (com_name, create_time, com_content) 
    VALUES (?, ?, ?);`
    const [result] = await connections.execute(statement, [name, time, note])
    // 返回值：[
    //   ResultSetHeader {
    //     fieldCount: 0,
    //     affectedRows: 1,
    //     insertId: 4,
    //     info: '',
    //     serverStatus: 2,
    //     warningStatus: 0
    //   },
    //   undefined
    // ]
    return result
  }
  // 点赞
  async giveLike(id, ifTrue) {
    // 根据评论唯一 id 查询点赞数
    const statement = `SELECT good_number FROM comments WHERE id = ?;`
    // 返回的是一个数组，第一个数组里的内容是对象，这个对象就是查询的数据
    const number = await connections.execute(statement, [id])
    // 通过ifTrue判断是 点赞 还是 取消点赞
    if (ifTrue) {
      const goodNumber = number[0][0].good_number + 1
      // 点赞数 +1
      const statement2 = `UPDATE comments SET good_number=? WHERE id=?;`
      const result = await connections.execute(statement2, [goodNumber, id])
      return result
    } else {
      const goodNumber2 = number[0][0].good_number - 1
      // 点赞数 -1
      const statement3 = `UPDATE comments SET good_number=? WHERE id=?;`
      const result2 = await connections.execute(statement3, [goodNumber2, id])
      return result2
    }

  }
}

module.exports = new CommentService();
