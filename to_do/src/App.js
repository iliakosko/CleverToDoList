import './App.css';

import Main from './components/Main';
import Header from './components/Header';
import AddNewToDo from './components/AddNewToDo'
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className="App">
        <Header>
          <h1>Clevar To-Do</h1>
        </Header>
        <Main>
          <EditTodo />
          <AddNewToDo />
          <Todos/>
        </Main>
    </div>
  );
}

export default App;
