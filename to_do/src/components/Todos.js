import React, { useContext } from "react"

import Todo from "./Todo"

import { TodoContext } from "../context"

function Todos(){
    const {selectedProject} = useContext(TodoContext)

    const todos = [
        {
            id: '1',
            text: "TEst",
            date: "13/12/2021",
            checked: false,
            color: '#000000'
        },
        {
            id: '2',
            text: "tEst",
            date: "13/12/2021",
            checked: true,
            color: '#00ff00'
        }
    ]

    return(
        <div className="Todos">
            <div className="selected-project">
                {selectedProject}
            </div>
            <div className="todos">
                { 
                    todos.map(todo =>
                        <Todo todo={todo} key={todo.id} />
                    )
                }
            </div>
        </div>
    )
}

export default Todos