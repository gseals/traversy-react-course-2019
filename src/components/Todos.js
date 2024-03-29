import React from 'react';
import PropTypes from 'prop-types';
import TodoItems from './TodoItem';

class Todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
    <TodoItems key={todo.id} todo={todo}/>
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
