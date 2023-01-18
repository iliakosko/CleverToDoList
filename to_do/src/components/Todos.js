import React, { useContext } from "react"

import Todo from "./Todo"

import { TodoContext } from "../context"

function Todos(){
    const {todos, selectedProject} = useContext(TodoContext)

    return(
        <div className="Todos">
            <div className="selected-project">
                {selectedProject}
            </div>
            <div className="todos">
                { 
                    todos.filter(todo=> todo.date===selectedProject).map(todo =>
                        <Todo todo={todo} key={todo.id} />
                    )
                }
            </div>
        </div>
    )
}

export default Todos