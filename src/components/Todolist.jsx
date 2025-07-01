import React, { useState } from 'react'
import ToDoItem from './ToDoItem';
import ListHeader from './ListHeader';
import InputHeader from './InputHeader';
import SearchBar from './SearchBar';

const Todolist = () => {
  
  const[inputValue, setInputValue] = useState('');
  const[items, setItems] = useState([]);
  const[sortOrder, setSortOrder] = useState(0); // 0 - unsorted; 1 - sorted ascending; 2 - sorted descending
  const[filterBy, setFilterBy] = useState(0); // 0 - All 1 - All Active 2 - Completed
  const[searchQuery, setSearchQuery] = useState('');

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
    const updatedTasks = [...items];  
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
        <ul className='max-w-xl w-full bg-gray-50 rounded-xl shadow-xl p-4 flex flex-col gap-3'>
          <SearchBar searchFunction={setSearchQuery}/>
          <ListHeader sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} handleFilterBy={handleFilterBy} filterByStatus={filterBy}/>
          {items.map((item, index) => {
            if(item.text.includes(searchQuery))
              return <ToDoItem key={index} task={item} onRemove={handleRemove} onCompletion={handleComplete} onSubmitEdit={handleEdit}/>
          })}
        </ul>
        break; 
      case 1: fullListRender = 
        <ul className='max-w-xl w-full bg-gray-50 rounded-xl shadow-xl p-4 flex flex-col gap-3'>
          <SearchBar searchFunction={setSearchQuery}/>
          <ListHeader sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} handleFilterBy={handleFilterBy} filterByStatus={filterBy}/>
          {items.map((item, index) => {
            if(!item.completed && item.text.includes(searchQuery))
              return <ToDoItem key={index} task={item} onRemove={handleRemove} onCompletion={handleComplete} onSubmitEdit={handleEdit}/>
          })}
        </ul>   
        break;
      case 2: fullListRender = 
        <ul className='max-w-xl w-full bg-gray-50 rounded-xl shadow-xl p-4 flex flex-col gap-3'>
          <SearchBar searchFunction={setSearchQuery}/>
          <ListHeader sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} handleFilterBy={handleFilterBy} filterByStatus={filterBy}/>
          {items.map((item, index) => {
            if(item.completed && item.text.includes(searchQuery))
              return <ToDoItem key={index} task={item} onRemove={handleRemove} onCompletion={handleComplete} onSubmitEdit={handleEdit}/>
          })}
        </ul>
        break;
    }
  } 

  return (
    <div className='grid grid-cols-1 m-2 text-zinc-100 gap-8'>
      <InputHeader handleSubmit={handleSubmit} handleChange={handleChange} inputValue={inputValue}/>
      <div className={`flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4`}>
        {
        fullListRender 
        } 
      </div>
    </div>
  )
}

export default Todolist
