import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { inc, dec, stepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged} value={props.counter.step} type='number'/>
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

// Métodos para mapear o mundo do redux para o mundo do react
const mapStateToProps = state => ({counter: state.counter_reducer_instance}) // Cria um objeto recebendo o reducer vindo de index.jsx
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch)

// Connect é uma função que retorna outra função. A função retornada é chamada enviando a função/classe 'Counter', e aí sim o retorno da segunda fução chamada é exportado
export default connect(mapStateToProps, mapDispatchToProps)(Counter)