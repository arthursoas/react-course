import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clear, removeAll } from './todoActions'

class TodoForm_class extends Component{
    constructor(props){
        super(props)
        
        this.keyHandler = this.keyHandler.bind(this)
    }

    // Sempre que um componente for exibido, o react chama esse método
    componentWillMount() { 
        this.props.search()
    }

    keyHandler(e){
        const {add, search, description, clear, removeAll} = this.props
        if(e.key === 'Enter'){ // Se pressionar Enter, faça...
            e.shiftKey ? search() : add(description) // Se o shift estiver pressionado
        } else if (e.key === 'Escape'){ // Se pressionar esc, faça...
            clear()
        } else if (e.shiftKey){
            if(e.key === 'd'){
                removeAll(this.props.description)
            }
        }
    }

    render(){
        const {add, clear, search, description, removeAll} = this.props        
        return(
            <div role="form" className="todoForm">
            <Grid cols='12 7 9'>
                <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                    onChange={this.props.changeDescription}
                    onKeyUp={this.keyHandler}
                    value={this.props.description}/>
            </Grid>
            <Grid cols='12 5 3'>
                <IconButton style="primary" icon="plus"
                    onClick={() => add(description)}></IconButton>
                <IconButton style="info" icon="search"
                    onClick={search}></IconButton>
                <IconButton style="default" icon="close"
                    onClick={() => clear()}></IconButton>
                <IconButton style="danger" icon="trash-o"
                    onClick={() => removeAll(this.props.description)}></IconButton>
            </Grid>
        </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo_reducer_instance.description})
const mapDispachToProps = dispach => bindActionCreators({ changeDescription, search, add, clear, removeAll }, dispach)

export default connect(mapStateToProps, mapDispachToProps)(TodoForm_class)