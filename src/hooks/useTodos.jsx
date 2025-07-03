import { useState } from "react";

export default function useTodos(){
  const[inputValue, setInputValue] = useState('');
  const[items, setItems] = useState([]);
  const[sortOrder, setSortOrder] = useState(0); // 0 - unsorted; 1 - sorted ascending; 2 - sorted descending
  const[filterBy, setFilterBy] = useState(0); // 0 - All 1 - All Active 2 - Completed
  const[searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
      setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([...items, {text : inputValue, id : Date.now(), completed : false}]);
    setInputValue('');
  }

  const handleRemove = (idToRemove) =>{
    const updatedTasks = items.filter(item => item.id != idToRemove);

    setItems(updatedTasks);
  }

  const handleComplete = (idToComplete) => {
      const updatedTasks = items.map((item) => {
          if(item.id === idToComplete)
              return {...item, completed: !item.completed};
          return item;
      })

      setItems(updatedTasks);
  }

  const handleSortOrderChange = () => {
    if(sortOrder == 2)
      setSortOrder(1);
    else if(sortOrder == 0)
      setSortOrder(2);
    else
      setSortOrder(2);
  }

  const handleEdit = (editedTask) => {
    const updatedTasks = items.map((item) => {
      if(item.id == editedTask.id){
        return editedTask;
      }
      return item;
    })
    setItems(updatedTasks);
  }

  const handleFilterBy = (buttonId) => {
    switch(buttonId){
      case 'sortByActiveButton': 
        setFilterBy(1);
        break;
      case 'sortByCompletedButton':
        setFilterBy(2);
        break;
      case 'sortByAllButton':
        setFilterBy(0);
        break;
    }
  }

  return {inputValue, items, sortOrder, filterBy, searchQuery, handleChange, handleSubmit, handleRemove, handleComplete,
    handleSortOrderChange, handleEdit, handleFilterBy, setSearchQuery
  };
}