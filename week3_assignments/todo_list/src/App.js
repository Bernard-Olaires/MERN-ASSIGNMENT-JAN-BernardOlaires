import React, { useState } from 'react';
import './App.css';

import TodoDisplay from './components/TodoDisplay';
import TodoForm from './components/TodoForm';


function App() {

  const [newTodo, setNewTodo] = useState("");

  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if(newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    };
    
    // setTodos and pass in a brand new array containing all current todos plus 1 more
    setTodos([...todos, todoItem]);
    setNewTodo("");
  }



  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    })

    setTodos(filteredTodos);
  }

  const handleToggleTodoComplete = (idx) => {
    const updatedTodos = todos.map((todo,i) => {
      if (idx === i) {
        todo.complete = !todo.complete;

        // To avoid mutating the todo directly, do this
        // const updatedTodo =12 { ... todo, complete: !todo.complete };
        // return updatedTodo;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: "center"}} >
      <h1>Todo List:</h1>
      <TodoForm 
      handleNewTodoSubmit={handleNewTodoSubmit}
      setNewTodo={setNewTodo}
      newTodo={newTodo}
      />

      {
        todos.map((todo, i) => {
          return (
            <TodoDisplay 
            key={i}
            todo={todo} 
            handleToggleTodoComplete={handleToggleTodoComplete} 
            i={i} 
            handleTodoDelete={handleTodoDelete}
            />
          )
        })
      }
    </div>
  );
}

export default App;
