import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';

function TodoContainer () {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoValue) => {
      setTodos([...todos, { id: 1, value: todoValue }]);
    };

     return (
        <div>
              <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default TodoContainer;
