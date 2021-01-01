import * as React from "react"
import App from '../components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

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

const store = createStore(reducer)

// markup
const IndexPage = () => {
  return (
    <main>
      <Provider store={store}>
        <App />
      </Provider>
    </main>
  )
}

export default IndexPage
