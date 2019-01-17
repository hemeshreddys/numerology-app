import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'
import List from './List';

class App extends Component {
  constructor() {
    super()
    this.sate = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = () => {
    console.log('Hello Add Item')
  }
  render() {
    return (
      <div className="App">
       
      </div>
    )
  }
}

export default App