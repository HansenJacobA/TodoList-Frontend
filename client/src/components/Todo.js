import React, { Component } from 'react';
import Input from './Input';
import ListTodo from './ListTodo';

const axios = require('axios');

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.getTodos = this.getTodos.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios.get('/api/todos')
      .then((res) => {
        if (res.data) {
          this.setState({
            todos: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  deleteTodo(id) {
    axios.delete(`/api/todos/${id}`)
      .then((res) => {
        if (res.data) {
          this.getTodos();
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>My Todo(s)</h1>
        <Input getTodos={this.getTodos} />
        <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Todo;
