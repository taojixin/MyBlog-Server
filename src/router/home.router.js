const express = require('express')
const homeRouter = express.Router();

const {
  getDirectory,
} = require('../controller/home.controller')

homeRouter.get('/directory', getDirectory)


module.exports = homeRouter;