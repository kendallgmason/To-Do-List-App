import { useState } from 'react';

function Input({ getText, addButton }) {


    return (
        <div>
            <input onChange={getText} placeholder="Type an item to add"></input>
            <button onClick={addButton}>Add to To Do</button>
        </div>
    )
}

export default Input;