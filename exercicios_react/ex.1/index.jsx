import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, crerateStore, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({ // Cria um objeto de reducers
    field: fieldReducer
})

ReactDOM.render(
    // Provider guarda o store para manter as os reducers prontos para uso
    <Provider store={createStore(reducers)}> 
        <Field initialValue='teste'></Field>
    </Provider>
, document.getElementById('app'))