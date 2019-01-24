import React, { Component } from 'react';

import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
        {
            id: 1,
            title: 'learn new technologies',
            completed: false
        },
        {
            id: 2,
            title: 'implement the tech to something',
            completed: false
        },
        {
            id: 3,
            title: 'don\'t stop learning',
            completed: false
        },
    ]
}
// mark complete
 markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
    
 }

 //delete todo

 delTodo = (id) => {
   this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
 }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
