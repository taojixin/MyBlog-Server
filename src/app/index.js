const express = require('express')
const parser = require('body-parser')

const homeRouter = require('../router/home')
const notesRouter = require('../router/notes')


const app = express();

// 解析前端传过来的数据
app.use(parser.json())

// 首页的数据请求
app.use('/api/home', homeRouter);
// 笔记的数据请求
app.use('/api/notes', notesRouter);



module.exports = app;