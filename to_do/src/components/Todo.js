import React, { useState } from "react";
import {CheckCircleFill, Circle} from 'react-bootstrap-icons'

function Todo({todo}){
    const [hover, setHover] = useState(false)

    return (
        <div className="Todo">
            <div
                className="todo-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                <div className="check-todo">
                    {
                    todo.checked ?
                    <span className="checked">
                        <CheckCircleFill collor="#bebebe" />
                    </span> 
                    :
                    <span className="unchecked">
                        <Circle collor = {todo.color} />
                    </span>
                    }                    
                </div>
                <div className="text">
                    <p>{todo.text}</p>
                    <div className={`line ${todo.checked ? 'line-through': ""}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Todo