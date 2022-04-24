const connections = require('../app/database')

class StudyService {
  // 获取笔记分类列表
  async getSortList() {
    const statement = `SELECT * FROM sort;`
    const result = await connections.execute(statement)
    return result
  }
  // 上传笔记
  async uploadNote(noteMessage) {
    const statement = `INSERT INTO notes_test (note_title,note_describe,note_content,note_createtime,note_sort)
    VALUES (?,?,?,?,?);`
    const result = await connections.execute(statement,[noteMessage.title,noteMessage.describe,noteMessage.content,noteMessage.createtime,noteMessage.sort])
    return result
  }
}

module.exports = new StudyService();