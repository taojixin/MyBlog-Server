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
}

module.exports = new NotesService();