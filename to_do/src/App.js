import './App.css';

import Main from './components/Main';
import Header from './components/Header';
import AddNewToDo from './components/AddNewToDo'
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
        <Header>
          <h1>Clevar To-Do</h1>
        </Header>
        <Main>
          <AddNewToDo />
          <Todos/>
        </Main>
    </div>
  );
}

export default App;
