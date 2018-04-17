const express = require('express')

module.exports = function(server){
    // API routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routers
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos') // Pega todos os methods do todo quando o usuário acessa a 'pagina 'todos'
}