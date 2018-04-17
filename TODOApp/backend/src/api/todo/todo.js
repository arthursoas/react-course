const restful = require('node-restful')
const mongoose = restful.mongoose

// formato de uma coleção (tabela) em mongo
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

// Cria uma coleção (tabela) no mongo. O nome vai para o plural (adiciona 's' no final e não é case-sensitive)
module.exports = restful.model('Todo', todoSchema)