import React from 'react'
import ListHeader from './ListHeader';
import InputHeader from './InputHeader';
import SearchBar from './SearchBar';
import useTodos from '../hooks/useTodos';
import TaskList from './TaskList';

const App = () => {
  
  const {inputValue, items, sortOrder, filterBy, searchQuery, displayedItems, handleChange, handleSubmit, handleRemove, handleComplete, handleSortOrderChange, handleEdit, handleFilterBy, setSearchQuery, handleCategoryChange, category
  } = useTodos();






  return (
    <div className='grid grid-cols-1 m-2 text-zinc-100 gap-8'>
      <InputHeader handleSubmit={handleSubmit} handleChange={handleChange} inputValue={inputValue} category={category} handleCategoryChange={handleCategoryChange}/>
      {!!items.length 
      && 
      <div className={`flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4`}>
        <ul className='max-w-xl w-full bg-gray-50 rounded-xl shadow-xl p-4 flex flex-col gap-3'>
           <SearchBar searchFunction={setSearchQuery}/>
           <ListHeader sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} handleFilterBy={handleFilterBy} filterByStatus={filterBy}/>
           <TaskList searchQuery={searchQuery}/>
           <TaskList displayedItems={displayedItems} searchQuery={searchQuery} handleRemove={handleRemove} handleComplete={handleComplete} handleEdit={handleEdit}/>
         </ul>
      </div>}
    </div>
  )
}

export default App
