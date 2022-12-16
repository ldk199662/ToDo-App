import React, { useState } from "react";
import Template from "./component/Template";
import List from "./component/List";
import {RiHeartAddLine} from 'react-icons/ri'
import Insert from "./component/Insert";
import './App.css'

let nextid = 4;

function App() {
  const [selectedTodo,setSelectedTodo] = useState(null)
  const [insertToggle, setInsertToggle] = useState(false)
  const [todos, setTodos] = useState ([
    {
      id:1,
      text: "운동하기",
      checked : true,
    },
    {
      id:2,
      text: "코딩하기",
      checked : true,
    }
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  }

  const onInsertTodo = text => {
    if (text === "") {
      return alert("입력 하세요.");
    } else {
      const todo = {
        id: nextid,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextid++;
    }
  };

 const onCheckToggle = id => {
  setTodos(todos =>
    todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )
  );
};

 const onChangeSelectedTodo = todo => {
  setSelectedTodo(todo);
};

const onRemove = id => {
  onInsertToggle();
  setTodos(todos => todos.filter(todo => todo.id !== id));
};
const onUpdate = (id, text) => {
  onInsertToggle();
  setTodos(todos =>
    todos.map(todo => (todo.id === id ? { ...todo, text } : todo))
  );
};

  return (
    <Template>
      <List 
      todos={todos}
      onCheckToggle={onCheckToggle}
      onInsertToggle={onInsertToggle}
      onChangeSelectedTodo={onChangeSelectedTodo}/>
      <div className="add-todo-btn" onClick={onInsertToggle}>
        <RiHeartAddLine/>
      </div>
      {insertToggle && <Insert 
      selectedTodo={selectedTodo}
      onInsertToggle={onInsertToggle}
      onInsertTodo={onInsertTodo}
      onRemove={onRemove}
      onUpdate={onUpdate} />}
    </Template>
  );
};

export default App;
