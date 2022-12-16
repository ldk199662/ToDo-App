import React from "react";
import Item from "./Item";
import '../App.css'


const List = ({todos,
    onCheckToggle,
    onInsertToggle,
    onChangeSelectedTodo}) => {
    return (
    <div className="list">
        {todos.map( todo => (
    <Item todo={todo}
    key={todo.id}
    onCheckToggle={onCheckToggle}
    onInsertToggle={onInsertToggle}
    onChangeSelectedTodo={onChangeSelectedTodo}/>
    ))}
    </div>
    );
};

export default List;