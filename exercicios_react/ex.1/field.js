import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeValue } from './fieldActions'

class Field extends Component {

    render(){
        return (
            <div>
                <label>{this.props.value}</label><br/>
                <input onChange={this.props.changeValue} value={this.props.value}/>
            </div>
        )
    }
}

// Coloca elementos do estado detro de props
function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

// Indica que toda fução será executada por meio de um dispach
function mapDispatchtoProps(dispatch){
    return bindActionCreators({ changeValue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(Field)