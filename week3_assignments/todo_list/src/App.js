import React, { useState } from 'react';
import './App.css';

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
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== delIdx;
    })

    setTodos(filteredTodos);
  }

  const handleToggleTodoComplete = (idx) => {
    const updatedTodos = todos.map((todo,i) => {
      if (idx === i) {
        todo.complete = !todo.complete;

        // To avoid mutating the todo directly, do this
        // const updatedTodo = { ... todo, complete: !todo.complete };
        // return updatedTodo;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: "center"}} >
      <h1>Todo List:</h1>
      <form onSubmit={ (event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value)
        }} 
        type="text" 
        value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      {
        todos.map((todo, i) => {
          const todoClasses = ["bold", "italic"];

          if (todo.complete) {
            todoClasses.push("line-through");
          }

          return (
            <div key={i} style={{marginTop: "10px"}}>
              <input onChange={(event) => {
                handleToggleTodoComplete(i);
              }} checked={todo.complete} type="checkbox" />
              <span className={todoClasses.join(" ")}>{todo.text}</span>
              <button style={{marginLeft: "10px"}} onClick={(event) => {
                handleTodoDelete(i);
              }}>Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
