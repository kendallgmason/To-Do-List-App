import './App.css';
import { useState } from 'react';
import List from '../list/index.js';
import Input from '../input/index.js';

const initialList = ['Walk the dog', 'Take over the world', 'Listen to some King Crimson', 'Watch Impractical Jokers', 'Go to the Winchester, have a pint and wait for all of this to blow over'];

function App() {
  const [list, setList] = useState(initialList);
  const [text, setText] = useState('');

  function getText(e) {
    let textValue = e.target.value;
    setText(textValue);
    console.log(text);
  }

  function addButton() {
    let newList = [...list, text];
    setList(newList);
    console.log(newList);
  }

  return (
    <div className="App">
      To Do List
      <Input getText={getText} addButton={addButton}></Input>
      <List list={list}></List>
      {/* {list.map(item => {
        return <li>{item}</li>
      })} */}
    </div>
  );
}

export default App;