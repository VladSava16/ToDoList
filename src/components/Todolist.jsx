import React, { useState } from 'react'
import ToDoItem from './ToDoItem';
import ListHeader from './ListHeader';

const Todolist = () => {
  
  const[inputValue, setInputValue] = useState('');
  const[items, setItems] = useState([]);
  const[sortOrder, setSortOrder] = useState(0); // 0 - unsorted; 1 - sorted ascending; 2 - sorted descending
  const[filterBy, setFilterBy] = useState(0); // 0 - All 1 - All Active 2 - Completed

  const handleChange = (e) => {
      setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([...items, {text : inputValue, id : Date.now(), completed : false}]);
    setInputValue('');
  }

  const handleRemove = (idToRemove) =>{
    const updatedTasks = items.filter(item => item.id != idToRemove);

    setItems(updatedTasks);
  }

  const handleComplete = (idToComplete) => {
      const updatedTasks = items.map((item) => {
          if(item.id === idToComplete)
              return {...item, completed: !item.completed};
          return item;
      })

      setItems(updatedTasks);
  }

  const handleSortOrderChange = () => {
    if(sortOrder == 2)
      setSortOrder(1);
    else if(sortOrder == 0)
      setSortOrder(2);
    else
      setSortOrder(2);
    const updatedTasks = items;  
    switch(sortOrder){
      case 2: {updatedTasks.sort((a, b) => a.text < b.text ? 1: ((b.text < a.text) ? -1 : 0)); break;}
      default: {updatedTasks.sort((a, b) => a.text > b.text ? 1: ((b.text > a.text) ? -1 : 0)); break;}
    }


    setItems(updatedTasks);
  }

  const handleEdit = (editedTask) => {
    const updatedTasks = items.map((item) => {
      if(item.id == editedTask.id){
        return editedTask;
      }
      return item;
    })
    setItems(updatedTasks);
  }

  const handleFilterBy = (buttonId) => {
    switch(buttonId){
      case 'sortByActiveButton': 
        setFilterBy(1);
        break;
      case 'sortByCompletedButton':
        setFilterBy(2);
        break;
      case 'sortByAllButton':
        setFilterBy(0);
        break;
    }
  }

  let fullListRender;
  
  if(items.length > 0){
    switch(filterBy){
      case 0: fullListRender = 
        <div className={`flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4`}>
          <ul className='max-w-xl w-full bg-gray-50 rounded-xl shadow-xl p-4'>
            <ListHeader sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} handleFilterBy={handleFilterBy} filterByStatus={filterBy}/>
            {items.map((item, index) => (
              <ToDoItem key={index} task={item} onRemove={handleRemove} onCompletion={handleComplete} onSubmitEdit={handleEdit}/>
            ))}
          </ul>
        </div>   
        break; 
      case 1: fullListRender = 
        <div className={`flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4`}>
          <ul className='max-w-xl w-full bg-gray-50 rounded-xl shadow-xl p-4'>
            <ListHeader sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} handleFilterBy={handleFilterBy} filterByStatus={filterBy}/>
            {items.map((item, index) => {
              if(!item.completed)
                return <ToDoItem key={index} task={item} onRemove={handleRemove} onCompletion={handleComplete} onSubmitEdit={handleEdit}/>
            })}
          </ul>
        </div>   
        break;
      case 2: fullListRender = 
        <div className={`flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4`}>
          <ul className='max-w-xl w-full bg-gray-50 rounded-xl shadow-xl p-4'>
            <ListHeader sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} handleFilterBy={handleFilterBy} filterByStatus={filterBy}/>
            {items.map((item, index) => {
              if(item.completed)
                return <ToDoItem key={index} task={item} onRemove={handleRemove} onCompletion={handleComplete} onSubmitEdit={handleEdit}/>
            })}
          </ul>
        </div> 
        break;
    }
  } 

  return (
    <div className='grid grid-cols-1 m-2 text-zinc-100'>
      <div className='flex flex-col items-center justify-center mb-8'>
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
          <label className='text-zinc-100 whitespace-nowrap text-1g'>Today I have to...</label>
          <input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={inputValue} onChange={handleChange} placeholder='do laundry'></input>
          <button type="submit" className='whitespace-nowrap text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Add Task</button>
        </form>
      </div>
      {
       fullListRender 
      } 
    </div>
  )
}

export default Todolist
