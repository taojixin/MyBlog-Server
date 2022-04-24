const express = require('express')
const notesRouter = express.Router();
const { cssBasic } = require('../../notes/cssBasic')
const { gitBasic } = require('../../notes/gitBasic')
const { jqueryBasic } = require('../../notes/jqueryBasic')
const { vueBasic } = require('../../notes/vueBasic')

const {addNote} = require('../../controller/notes.controller')

notesRouter.post('/addnote', addNote)

notesRouter.get('/vuebasic', vueBasic)
notesRouter.get('/cssbasic', cssBasic)
notesRouter.get('/gitbasic', gitBasic)
notesRouter.get('/jquerybasic', jqueryBasic)

module.exports = notesRouter;