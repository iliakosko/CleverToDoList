import React, {createContext, useState} from "react";
import { useTodos } from "../hooks";
const TodoContext = createContext()

function TodoContextProvider({children}){
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)

    const todos = useTodos()
    return (
        <TodoContext.Provider 
            value={
                {
                    selectedProject,
                    setSelectedProject,

                    todos
                }
            }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext}