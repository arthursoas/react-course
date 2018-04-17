const logger = require('./logger') // Esse arquivo também será jogado no bunddle.js ao gerar o output
console.log('Webpack')
logger.info('Usando o padão commonJS!!!')
// ---------------------------------------------------------------------------------------
require('./duvidaCruel') // Sempre que algum módulo é importado, o conteúdo dele aparece no bunddle.js
// ---------------------------------------------------------------------------------------
import Pessoa from './pessoas.js' // Precisa ser convertido pelo babel para es2015
const p = new Pessoa('Guilherme')
console.log(p.toString())
// ---------------------------------------------------------------------------------------
const produto = {
    nome: 'Cante bic preta',
    preco: 1.90,
    desconto: 0.05
}
function clone(objeto){
    // Precisará da dependência babel-plugin-transform-object-rest-spread
    return {...objeto} // Retorna um novo objeto
}
const novoProduto = clone(produto)
novoProduto.nome = 'Caneta bic Azul'
console.log(produto, novoProduto)
// ---------------------------------------------------------------------------------------
import './estilo.css'
import 'react'
export default props => (
    // Precisará da dependência babel-preset-react e do preset react
    <h1>Olá</h1> // Sintaxe do react
)
console.log('Funcionou')
// ---------------------------------------------------------------------------------------
