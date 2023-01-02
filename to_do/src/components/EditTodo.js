import React, { useState } from "react"

import TodoForm from "./TodoForm";

function EditTodo(){


    const [text, setText] = useState('')

    const[date, setDate] = useState()

    function handleSubmit(e){

    }


    return(
        <div className="EditTodo">
            <div className="header">
                Edit Todo
            </div>
            <div className="container">
               <TodoForm
                    handleSubmit={handleSubmit}
                    text={text}
                    setText={setText}
                    date = {date}
                    setDate={setDate} 
               />        
            </div>
        </div>
    )
}

export default EditTodo