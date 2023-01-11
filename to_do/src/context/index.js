import React, {createContext, useState} from "react";
import { useTodos } from "../hooks";
const TodoContext = createContext()

function TodoContextProvider({children}){
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)
    const [selectedTodo, setSelectedTodo] = useState(undefined)
    const todos = useTodos()
    return (
        <TodoContext.Provider 
            value={
                {
                    selectedProject,
                    setSelectedProject,

                    todos,
                    selectedTodo,
                    setSelectedTodo
                }
            }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext}