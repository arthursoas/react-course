import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    console.log('call search')
    return (dispatch, getState) => {
        const description = getState().todo_reducer_instance.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

// export const add = (description) => {
//     const request = axios.post(URL, {description})
//     return [{
//         type: 'TODO_ADDED',
//         payload: request
//     }, search()] // chama o método search quando o add também é chamado. Depende do middleware 'multi'
// }

// CHAMADA DE DOIS ACTIONS SEQUENCIAIS
export const add = (description) => {
    console.log('call add')    
    if (description){
        return dispatch => {
            axios.post(URL, {description})
                .then(resp => dispatch(clear()))
                .then(resp => dispatch(search()))
        } 
    } else {
        return dispatch => {}
    }
}

export const markedAsDone = (todo) => {
    console.log('call markedAsDone')    
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            // .then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data})) // Não é usado
            .then(() => dispatch(search()))
    }
}

export const markedAsPending = (todo) => {
    console.log('call markedAsPending')    
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(() => dispatch(search()))
    }
}

export const remove = (todo) => {
    console.log('call remove')    
    console.log(todo)
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(() => dispatch(search()))
    }
}

export const removeAll = (description) => {
    console.log('call removeAll')    
    return dispatch => {
        axios.delete(`${URL}/delete-all?term=${description}`)
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    console.log('call clear')    
    return [{ type: 'TODO_CLEAR'}, search()]
}

