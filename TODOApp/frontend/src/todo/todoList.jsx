import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markedAsDone, markedAsPending, remove} from './todoActions'

const TodoList_func = props => {
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton name='banana' style='success' icon='check' hide={todo.done}
                        onClick={() => props.markedAsDone(todo)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markedAsPending(todo)}></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }
    
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className='tableActions'>Acões</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({list: state.todo_reducer_instance.list, description: state.todo_reducer_instance.description})
const mapDispatchToProps = dispatch => bindActionCreators({markedAsDone, markedAsPending, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList_func)