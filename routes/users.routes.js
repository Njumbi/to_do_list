const express = require('express')
const routes = express.Router()

const userController = require('../controllers/users.controllers')

routes.get('/list', userController.getListPage)
routes.get('/', userController.getLoginPage)
routes.get('/registration', userController.getRegistrationPage)


module.exports = routes