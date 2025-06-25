import React from 'react'

const SortButton = ({sortOrder, onClick}) => {
  
  

  const handleClick = () => {
    onClick();
  }

  
  const icons = {
    0: 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-blue-700 text-blue-600 transition-colors duration-200 size-6 cursor-pointer" onClick={handleClick}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
    </svg>,
    1: 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-blue-700 text-blue-600 transition-colors duration-200 size-6 cursor-pointer" onClick={handleClick}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>,
    2: 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-blue-700 text-blue-600 transition-colors duration-200 size-6 cursor-pointer" onClick={handleClick}>
     <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  }

  const sortButtonIcon = icons[sortOrder];


  return (
    <div className="sortButton flex items-center">
      {sortButtonIcon}
    </div>
  )
}

export default SortButton