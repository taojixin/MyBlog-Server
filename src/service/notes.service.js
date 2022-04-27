const connections = require('../app/database')

class NotesService {
  // 添加笔记
  addNote(mesarray) {
    const statement = `INSERT INTO notes_test (note_title,note_describe,note_content,note_createtime,note_sort)
    VALUES (?,?,?,?,?);
    `
    const result = connections.execute(statement, [mesarray])
    return result
  }
  // 根据分类获取笔记
  async getSomeNote(sort) {
    const statement = `SELECT id,note_title,note_describe,note_createtime,note_sort FROM notes_test WHERE note_sort=?;`
    const result = await connections.execute(statement, [sort])
    return result[0]
  }
  // 根据id获取内容
  async getNoteContent(id) {
    const statement = `SELECT note_content FROM notes_test WHERE id=?;`
    const result = await connections.execute(statement, [id+''])
    return result[0][0]
  }
}

module.exports = new NotesService();