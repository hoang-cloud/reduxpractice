import React from 'react'
import '../layout/layout.css'
import {connect} from 'react-redux'
import {createStore} from 'redux'

const addMessage = (msg) =>{
    return ({
        type: 'ADD_TODO',
        msg: msg
    })
}

const reducer = (state = [], action) => {
    switch(action.type){
      case 'ADD_TODO':
        return state.concat(action.msg)
      default:
        return state
    }
}

console.log(store.dispatch(addMessage("X")))

const store = createStore(reducer)

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input:'',
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit(){
        this.props.addToDo(this.state.input)    }
    render(){
        return(
            <div className="Wrapper">
                <div className="ContentWrapper">
                    <div className="TextWrapper">
                    <h1 className="Title">TO DO LIST APP</h1>
                    <p className="Description">React simple app, add your todo and enjoy</p>
                    </div>
                    <div className="InputWrapper">
                    <input className="Input" placeholder="Enter your todo" onChange={this.handleChange}/>
                    </div>
                    <div className="ButtonWrapper">
                    <button className="Button" onClick={this.handleSubmit}>Add your todo</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {todos: state}
}
const mapDispatchToProps = (dispatch) => {
    return {
            addToDo: (msg) => 
            dispatch(addMessage(msg))
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(App)