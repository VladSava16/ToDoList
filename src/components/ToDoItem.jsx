import React, { useState } from 'react'

const ToDoItem = ({task, onRemove, onCompletion, onSubmitEdit}) => {
  
  const {text, id, completed} = task;
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskText, setNewTaskText] = useState(text);

  const handleRemoveClick = () => {
      onRemove(id);
  } 

  const handleComplete = () => {
      onCompletion(id);
  }

  const handleEdit = () => {
    setNewTaskText(text);
    setIsEditing(!isEditing);
  }
  
  const handleChange = (e) => {
    setNewTaskText(e.target.value);
  }

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    handleEdit();
    onSubmitEdit({text: newTaskText, id: id, completed: completed});
  }


  return (
    <li className='flex items-left justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50'>
      {isEditing ?
        <form onSubmit={handleSubmitEdit}>
          <input type="text" name="newContent" id="newContent" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={newTaskText} onChange={handleChange} onSubmit={handleSubmitEdit}/>
        </form>
        :
        <div className='pr-4 min-w-0'>
          <span className={`${completed ? 'line-through text-gray-400' : 'text-gray-900'} break-words whitespace-normal block`}>{text}</span>
        </div>
      }
      <div className='flex items-center gap-3 pl-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handleEdit}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
        <input checked={completed} type="checkbox" onChange={handleComplete} className='h-5 w-5 cursor-pointer transition-colors duration-200 focus:ring-2 focus:ring-blue-500'/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer hover:text-red-700 size-6 text-red-500 transition-colors duration-200" onClick={handleRemoveClick}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </div>
    </li>
  )
}

export default ToDoItem