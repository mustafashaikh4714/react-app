import React, { Component } from 'react'; 
import Header from './components/layout/Header'
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

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

 // add todo
 
addTodo = (title) => {
  const newTodo = {
    title,
    completed: false
  }
   this.setState({todos: [...this.state.todos, newTodo]})
}

  render() {
    return (
      <div className="App">
     <div className = "container">
       <Header />
       <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
      </div>
    );
  }
}

export default App;
