import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuidv4';
import TodoForm from '../TodoForm/TodoForm';
uuidv4()
function TodoContainer () {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    }
     return (
        <div>
             {addTodo ? <TodoForm addTodo={addTodo} /> : null}
        </div>
    )
}

export default TodoContainer