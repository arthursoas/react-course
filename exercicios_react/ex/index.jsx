import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, crerateStore, createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './counter'
import counterReducer from './counterReducer'

const reducers = combineReducers({
    counter_reducer_instance: counterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter></Counter>
    </Provider>
, document.getElementById('app'))