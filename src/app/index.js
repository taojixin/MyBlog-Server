const express = require('express')
const parser = require('body-parser')

// 导入路由相关信息
const homeRouter = require('../router/home.router')
const notesRouter = require('../router/notes.router')
const commentRouter = require('../router/comment.router')


const app = express();

// 解析前端传过来的数据
app.use(parser.json())

// 首页的数据请求
app.use('/api/home', homeRouter);
// 笔记的数据请求
app.use('/api/notes', notesRouter);
// 评论的结果
app.use('/api/comment', commentRouter)



module.exports = app;