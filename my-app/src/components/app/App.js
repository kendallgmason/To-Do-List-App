import './App.css';
import { useState } from 'react';
import List from '../list/index.js';
import Input from '../input/index.js';



const initialList = ['Walk the dog', 'Take over the world', 'Listen to some King Crimson', 'Go to the Winchester, have a pint and wait for all of this to blow over'];

function App() {
  const [list, setList] = useState(initialList);
  const [text, setText] = useState('');

  function getText(e) {
    let textValue = e.target.value;
    setText(textValue);
  }

  function addToList() {
    let newList = [...list, text];
    setList(newList);
  }

  return (
    <div className="App">
     <h1> To Do List </h1>
      <Input inputFn={getText} placeholderText="Type an item to add" buttonFn={addToList} buttonText="Add to To Do"></Input>
      <List list={list} setList={setList}></List>
    </div>
  );
}

export default App;
