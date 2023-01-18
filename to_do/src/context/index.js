/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import { useTodos } from "../hooks";

import moment from "moment";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const today = moment(new Date()).format("MM/DD/YYYY");
  const [selectedProject, setSelectedProject] = useState(today);
  const [selectedTodo, setSelectedTodo] = useState(undefined);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const todos = useTodos();
  return (
    <TodoContext.Provider
      value={{
        selectedProject,
        setSelectedProject,

        errorMessages,
        setErrorMessages,

        isSubmitted,
        setIsSubmitted,

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
