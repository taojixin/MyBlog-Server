const express = require('express')
const studyRouter = express.Router()

const {
  verifyAuth
} = require('../../middleware/login.middleware')
const {
  getSortList,
  uploadNote,
  getAllNote
} = require('../../controller/study.controller')

// 获取所有笔记接口(不含笔记内容)
studyRouter.get('/getallnote', verifyAuth, getAllNote)
// 获取笔记分类接口
studyRouter.get('/getsortlist', verifyAuth, getSortList)
// 上传笔记接口
studyRouter.post('/uploadnote', verifyAuth, uploadNote)

module.exports = studyRouter;