import React from 'react';
import PropTypes from 'prop-types';

function ListTodo({ todos, deleteTodo }) {
  return (
    <ul>
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <li
            key={todo._id}
            onClick={() => deleteTodo(todo._id)}
            aria-hidden="true"
          >
            {todo.action}
          </li>
        ))
      ) : (
        <li>No todo(s) left</li>
      )}
    </ul>
  );
}
export default ListTodo;

ListTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
