import React from "react"

import Todo from "../Todo"

function Todos(){
    const selectedProject = "Today"

    const todos = [
        {
            id: '1',
            text: "TEst",
            date: "13/12/2021",
            checked: false
        },
        {
            id: '2',
            text: "tEst",
            date: "13/12/2021",
            checked: true
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