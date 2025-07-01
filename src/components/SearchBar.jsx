import React, { useState } from 'react'

const SearchBar = ({searchFunction, searchQuery}) => {
  

  const handleChange = (e) => {
    searchFunction(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='searchBar'>
      <form onSubmit={handleSubmit}>
        <input value={searchQuery} onChange={handleChange}type="text" name="searchInput" id="" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
      </form>
    </div>
  )
}

export default SearchBar