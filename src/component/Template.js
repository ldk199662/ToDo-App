import React from "react";
import '../App.css'

const Template = ({children}) => {
    return ( 
        
    <div className="template">
    <div className="title">To Do List</div>
    <div>{children}</div>
    </div>

    )
}

export default Template;