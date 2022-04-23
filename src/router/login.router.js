const express = require('express')
const LoginRouter = express.Router()

const {
  login
} = require('../controller/login.controller')

LoginRouter.post('/', login)

module.exports = LoginRouter;