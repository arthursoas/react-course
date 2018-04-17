const Todo = require('./todo')
const Database = require('../../config/database')

// Todo.route('delete-all.delete', function(req, res, next) {
//     console.log(req.query.term)
//     Todo.remove({'description' : /arthur/i}, function (err, person) {
//         if (err) return handleError(err);
//         res.send(person)
//     });
// });

Todo.route('delete-all.delete', function(req, res, next) {
    console.log(req.query.term)
    var search = new RegExp(''+req.query.term+'', 'i');
    Todo.remove({ 'description' : search}, function (err, result) {
    if (err) return handleError(err);
    res.send(result)
    });
});

Todo.methods(['get', 'post', 'put', 'delete'])
// get - pega infomações do banco
// post - insere infomações no banco
// put - atualiza infomações do banco
// delete - remove infomações do banco

Todo.updateOptions({new: true, runValidators: true}) // Altera o retorno quando é feito um update, e valida se os dados inseridos estão no formato correto

module.exports = Todo