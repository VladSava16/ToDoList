import React, { useMemo } from 'react'
import ToDoItem from './ToDoItem';
import ListHeader from './ListHeader';
import InputHeader from './InputHeader';
import SearchBar from './SearchBar';
import useTodos from '../hooks/useTodos';

const Todolist = () => {
  
  const {inputValue, items, sortOrder, filterBy, searchQuery, handleChange, handleSubmit, handleRemove, handleComplete,
    handleSortOrderChange, handleEdit, handleFilterBy, setSearchQuery
  } = useTodos();

  const displayedItems = useMemo(() => {
    let filteredItems = [...items];
    switch(sortOrder){
        case 1: {filteredItems.sort((a, b) => a.text < b.text ? 1: ((b.text < a.text) ? -1 : 0)); break;}
        case 2: {filteredItems.sort((a, b) => a.text > b.text ? 1: ((b.text > a.text) ? -1 : 0)); break;}
      }

    switch(filterBy){
      case 1:
        filteredItems = filteredItems.filter(item => !item.completed);
        break;
      case 2:
        filteredItems = filteredItems.filter(item => item.completed);
        break;
    }
    return filteredItems;
  }, [items, filterBy, sortOrder]);




  return (
    <div className='grid grid-cols-1 m-2 text-zinc-100 gap-8'>
      <InputHeader handleSubmit={handleSubmit} handleChange={handleChange} inputValue={inputValue}/>
      {!!items.length 
      && 
      <div className={`flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4`}>
        <ul className='max-w-xl w-full bg-gray-50 rounded-xl shadow-xl p-4 flex flex-col gap-3'>
           <SearchBar searchFunction={setSearchQuery}/>
           <ListHeader sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} handleFilterBy={handleFilterBy} filterByStatus={filterBy}/>
           {displayedItems.map((item, index) => {
             if(item.text.includes(searchQuery))
               return <ToDoItem key={item.id} task={item} onRemove={handleRemove} onCompletion={handleComplete} onSubmitEdit={handleEdit}/>
           })}
         </ul>
      </div>}
    </div>
  )
}

export default Todolist
