const connections = require('../app/database')

class StudyService {
  // 获取所有笔记
  async getAllNote() {
    const statement = `SELECT id,note_title,note_describe,note_createtime,note_sort FROM notes_test;`
    const result = await connections.execute(statement)
    return result[0]
  }
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
  // 删除笔记
  async deleteNote(id) {
    const statement = `DELETE FROM notes_test WHERE id=?;`
    const result = await connections.execute(statement, [id])
    return result
  }
  // 根据条数和页数查询笔记
  async getSomeNote(num, page) {
    const fromNum = (page - 1) * num
    const statement = `SELECT id,note_title,note_describe,note_createtime,note_sort FROM notes_test LIMIT ?,?;`
    const result = await connections.execute(statement, [fromNum+'', num+''])
    return result[0]
  }
}

module.exports = new StudyService();