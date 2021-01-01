import React from 'react'
import '../layout/layout.css'
import {connect} from 'react-redux'



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
                    {console.log(this.props.todos)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {todos : state}
}

export default connect(mapStateToProps)(App)