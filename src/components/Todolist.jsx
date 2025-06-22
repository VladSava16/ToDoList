import React, { useState } from 'react'
import ToDoItem from './ToDoItem';

const Todolist = () => {
  
  const[inputValue, setInputValue] = useState('');
  const[items, setItems] = useState([]);
  
  function handleChange(e){
      setInputValue(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    setItems([...items, {text : inputValue, completed : false, id : Date.now()}]);
    setInputValue('');
  }

  function handleRemove(idToRemove){
    const updatedTasks = items.filter(item => item.id != idToRemove);

    setItems(updatedTasks);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Insert an item into the list</label>
        <input type='text' className='outline m-8' value={inputValue} onChange={handleChange}></input>
        <button type="submit" className='outline'>Insert</button>
      </form>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem key={index} task={item} onRemove={handleRemove}/>
          ))}
        </ul>
      </div>    
    </div>
  )
}

export default Todolist