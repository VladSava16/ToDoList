import React, { useState } from 'react'

const Todolist = () => {
  
  const[inputValue, setInputValue] = useState('');
  const[items, setItems] = useState([]);
  
  function handleChange(e){
      setInputValue(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    setItems([...items, inputValue]);
    setInputValue('');
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
            <li key={index}>{item}</li>    
          ))}
        </ul>
      </div>    
    </div>
  )
}

export default Todolist