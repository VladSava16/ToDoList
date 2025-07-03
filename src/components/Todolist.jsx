import React, { useMemo } from 'react'
import ToDoItem from './ToDoItem';
import ListHeader from './ListHeader';
import InputHeader from './InputHeader';
import SearchBar from './SearchBar';
import useTodos from '../hooks/useTodos';

const Todolist = () => {
  
  const {inputValue, items, sortOrder, filterBy, searchQuery, displayedItems, handleChange, handleSubmit, handleRemove, handleComplete, handleSortOrderChange, handleEdit, handleFilterBy, setSearchQuery
  } = useTodos();






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
