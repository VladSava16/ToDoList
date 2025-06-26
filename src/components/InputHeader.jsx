import React from 'react'

const InputHeader = ({handleSubmit, handleChange, inputValue}) => {
  return (
    <div className='flex flex-col items-center justify-center mb-8'>
      <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <label className='text-zinc-100 whitespace-nowrap text-1g'>Today I have to...</label>
        <input required type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={inputValue} onChange={handleChange} placeholder='do laundry'></input>
        <button type="submit" className='whitespace-nowrap text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Add Task</button>
      </form>
    </div>
  )
}

export default InputHeader