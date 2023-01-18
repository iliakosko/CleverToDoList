import "./App.css";

import React, {  useContext } from "react";

import { TodoContext } from "./context";

import Main from "./components/Main";
import Header from "./components/Header";
import AddNewToDo from "./components/AddNewToDo";
import Todos from "./components/Todos";
import EditTodo from "./components/EditTodo";
import Calendar from "./components/Calendar";
import Login from "./components/Login";

function App() {
 
  const { isSubmitted } = useContext(TodoContext);

  return (

    <div>
      {isSubmitted ?
        <div className="App">
        <Header>
          <h1>Clevar To-Do</h1>
        </Header>
        <Main>
          <Calendar />
          <EditTodo />
          <AddNewToDo />
          <Todos />
        </Main>
      </div> : <Login />}
  </div>

   
  );
}

export default App;
