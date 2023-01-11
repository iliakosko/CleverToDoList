import React, { useContext, useState } from "react";
import {CheckCircleFill, Circle, Trash} from 'react-bootstrap-icons'

import firebase from "firebase";
import { TodoContext } from "../context";

function Todo({todo}){
    const [hover, setHover] = useState(false)

    const {selectedTodo, setSelectedTodo} = useContext(TodoContext)

    const handleDelete = todo => {
        deleteTodo(todo)

        if(selectedTodo === todo){
            setSelectedTodo(undefined)
        }
    }

    const deleteTodo = todo => {
        firebase
            .firestore()
            .collection('todos')
            .doc(todo.id)
            .delete()
    }

    const checkTodo = todo => {
        firebase
            .firestore()
            .collection('todos')
            .doc(todo.id)
            .update({
                checked : !todo.checked
            })

    }
    return (
        <div className="Todo">
            <div
                className="todo-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                <div 
                    className="check-todo"
                    onClick={() => checkTodo(todo)}>
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
                <div 
                    className="text"
                    onClick={() => setSelectedTodo(todo)}
                >
                    <p style={{color : todo.checked ? '#bebebe' : '#000000'}}>{todo.text}</p>
                    <div className={`line ${todo.checked ? 'line-through': ""}`}></div>
                </div>
                <div 
                    className="delete-todo"
                    onClick={() => handleDelete(todo)}>
                    {
                        (hover || todo.checked) &&
                        <span>
                            <Trash />
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo