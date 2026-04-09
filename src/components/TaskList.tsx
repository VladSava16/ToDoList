import React from "react";
import ToDoItem from "./ToDoItem";
import { Todo } from "../types";

interface TaskListProps {
  displayedItems: Todo[];
  searchQuery: string;
  handleRemove: (id: string) => void;
  handleComplete: (id: string) => void;
  handleEdit: (editedTask: Todo) => void;
}

const TaskList = ({displayedItems, searchQuery, handleRemove, handleComplete, handleEdit}: TaskListProps) => {

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