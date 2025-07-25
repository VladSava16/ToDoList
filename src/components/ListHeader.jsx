import React from 'react'
import SortButton from './SortButton'
import clsx from 'clsx'

const ListHeader = ({sortOrder, handleSortOrderChange, handleFilterBy, filterByStatus}) => {
  
  const handleOnClick = (e) => {
    handleFilterBy(e.target.id);
  }


  return (
    <div className='header flex flex-row justify-between align-center'>
      <div className='flex flex-row gap-6'>
        <div className='sortByActive '>
          <button onClick={handleOnClick} id='sortByActiveButton' className={clsx('transition-all duration-200 text-gray-900 text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-800', {'dark:text-white bg-orange-600' : filterByStatus === 1, })}>All Active</button>
        </div>
        <div className='sortByCompleted'>
          <button onClick={handleOnClick} id='sortByCompletedButton' className={clsx('transition-all duration-200 text-gray-900 text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-800', {'dark:text-white bg-orange-600' : filterByStatus === 2, })}>Completed</button>
        </div>
        <div className='sortByAll'>
          <button onClick={handleOnClick} id='sortByAllButton' className={clsx('transition-all duration-200 text-gray-900 text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-800', {'dark:text-white bg-orange-600' : filterByStatus === 0, })}>All</button>
        </div>
      </div>
        <div className='sortButtonWrapper flex'>
          <SortButton sortOrder={sortOrder} onClick={handleSortOrderChange}/>
        </div>
    </div>
  )
}

export default ListHeader