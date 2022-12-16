import React, { useEffect, useState } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import '../App.css'
import { TiTrash, TiPencil } from "react-icons/ti";

const Insert = ({onInsertToggle,
    onInsertTodo,
    selectedTodo,
    onRemove,
    onUpdate}) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {
        // 새로고침 막기 위해서
        e.preventDefault();

        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    }

    useEffect(()=>{
        if(selectedTodo){
            setValue(selectedTodo.text);
        }
    },[selectedTodo])

    return (
    <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }>
            <input
            placeholder="입력 하세요."
            value={value}
            onChange={onChange}
            ></input>
             {selectedTodo ? (
          <div className="rewrite">
            <TiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <TiTrash
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <RiHeartAddLine />
          </button>
        )}
      </form>
    </div>
    )
}


export default Insert;