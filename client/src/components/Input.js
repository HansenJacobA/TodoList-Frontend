import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: '',
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      action: e.target.value,
    });
  }

  addTodo() {
    const { action } = this.state;
    const task = { action };
    if (task.action && task.action.length > 0) {
      axios
        .post('/api/todos', task)
        .then((res) => {
          if (res.data) {
            this.getTodos();
            this.setState({ action: '' });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('input field required');
    }
  }

  render() {
    const { action } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={action} />
        <button onClick={this.addTodo} type="button">add todo</button>
      </div>
    );
  }
}

export default Input;
