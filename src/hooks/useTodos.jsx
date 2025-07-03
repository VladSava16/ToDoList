import { useState, useMemo } from "react";

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

    const displayedItems = useMemo(() => {
    let filteredItems = [...items];
    switch(sortOrder){
        case 1: {filteredItems.sort((a, b) => a.text < b.text ? 1: ((b.text < a.text) ? -1 : 0)); break;}
        case 2: {filteredItems.sort((a, b) => a.text > b.text ? 1: ((b.text > a.text) ? -1 : 0)); break;}
      }

    switch(filterBy){
      case 1:
        filteredItems = filteredItems.filter(item => !item.completed);
        break;
      case 2:
        filteredItems = filteredItems.filter(item => item.completed);
        break;
    }
    return filteredItems;
  }, [items, filterBy, sortOrder]);

  return {inputValue, items, sortOrder, filterBy, searchQuery, displayedItems, handleChange, handleSubmit, handleRemove, handleComplete,
    handleSortOrderChange, handleEdit, handleFilterBy, setSearchQuery
  };
}