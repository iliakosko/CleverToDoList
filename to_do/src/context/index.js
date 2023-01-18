/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import { useTodos } from "../hooks";

import moment from "moment";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const today = moment(new Date()).format("MM/DD/YYYY");
  const [selectedProject, setSelectedProject] = useState(today);
  const [selectedTodo, setSelectedTodo] = useState(undefined);
  const todos = useTodos();
  return (
    <TodoContext.Provider
      value={{
        selectedProject,
        setSelectedProject,

        todos,
        selectedTodo,
        setSelectedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };
