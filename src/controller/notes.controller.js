const vueBasic = require('../notes/vueBasic')
const cssBasic = require('../notes/cssBasic')
const gitBasic = require('../notes/gitBasic')
const jqueryBasic = require('../notes/jqueryBasic')

const service = require('../service/notes.service')
class NotesController {
  addNote(req, res, next) {
    const mesarray = req.body.mesarray
    service.addNote(mesarray).then(resolve => {
      res.end("存入成功")
    }).catch(error => {
      res.end("存入失败")
    })
  }
}

module.exports = new NotesController();