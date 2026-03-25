import React from "react";
import ToDoItem from "./ToDoItem";

const TaskList = ({displayedItems, searchQuery, handleRemove, handleComplete, handleEdit}) => {

  return (
  <div className="taskList">
    {displayedItems?.map((item) => {
             if(item.text.includes(searchQuery))
               return <ToDoItem key={item.id} task={item} onRemove={handleRemove} onCompletion={handleComplete} onSubmitEdit={handleEdit}/>
           })}
  </div>
  )
}

export default TaskList;