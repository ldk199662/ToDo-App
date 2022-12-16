import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import '../App.css'

const Item = ({todo,
    onCheckToggle,
    onInsertToggle,
    onChangeSelectedTodo}) => {
    const {id, text, checked} = todo;

    return (
        <div className="item">
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ?
                ( <MdCheckBox onClick={()=>{onCheckToggle(id)}}/> )
                :( <MdCheckBoxOutlineBlank onClick={()=> {onCheckToggle(id)}}/>)}
                <div className="text"
                onClick={()=>{
                    onChangeSelectedTodo(todo);
                    onInsertToggle();
                }}>{text}</div>

            </div>
            </div>
        

    )
}

export default Item;