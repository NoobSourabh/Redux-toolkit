import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  return (
    <Provider store={store}>
    <h1>
    redux toolkit
    </h1>
    <AddTodo/>
    <Todos/>
    </Provider>
  )
}

export default App