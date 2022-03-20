// 通过dotenv统一管理环境标量
const dotenv = require('dotenv').config();


const {APP_PORT} = process.env;

module.exports = {
  APP_PORT
}