import './App.css';

import Main from './components/Main';
import Header from './components/Header';
import AddNewToDo from './components/AddNewToDo'

function App() {
  return (
    <div className="App">
        <Header>
          <h1>Clevar To-Do</h1>
        </Header>
        <Main>
          <AddNewToDo />
        </Main>
    </div>
  );
}

export default App;
