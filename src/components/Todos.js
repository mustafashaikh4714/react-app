import React, { Component } from 'react';
import TodoItem from './TodoItem'
class Todos extends Component {

   
  render() {
    
    return this.props.todos.map((todo) => (
        <TodoItem todo={todo} markComplete={this.props.markComplete}/>
    ));
  }
}

export default Todos;