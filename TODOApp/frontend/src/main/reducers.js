import {combineReducers} from 'redux'

import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    todo_reducer_instance: todoReducer
})

export default rootReducer