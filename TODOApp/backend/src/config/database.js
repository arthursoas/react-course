const mongoose = require('mongoose')
mongoose.Promise = global.Promise // Remove uma advertência de depreciação
module.exports = mongoose.connect('mongodb://localhost/todo')