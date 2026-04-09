import { useState, useMemo, useEffect } from "react";
import { CATEGORIES } from "../constants/categories";
import { Todo, SortOrder, FilterBy } from "../types";

export default function useTodos(){
  const [inputValue, setInputValue] = useState<string>('');
  const [items, setItems] = useState<Todo[]>(() => {
    try {
    const saved = localStorage.getItem("todoItems");
    return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(0); // 0 - unsorted; 1 - sorted ascending; 2 - sorted descending
  const [filterBy, setFilterBy] = useState<FilterBy>(0); // 0 - All 1 - All Active 2 - Completed
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(category);
    setItems([...items, {text : inputValue, id : crypto.randomUUID(), completed : false, category: category}]);
    setInputValue('');
  }

  const handleRemove = (idToRemove: string) =>{
    const updatedTasks = items.filter(item => item.id !== idToRemove);

    setItems(updatedTasks);
  }

  const handleComplete = (idToComplete: string) => {
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

  const handleEdit = (editedTask: Todo) => {
    const updatedTasks = items.map((item) => {
      if(item.id === editedTask.id)
        return editedTask;
      
      return item;
    })
    setItems(updatedTasks);
  }

  const handleFilterBy = (buttonId: string) => {
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

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  return {inputValue, items, sortOrder, filterBy, searchQuery, displayedItems, category, handleChange, handleSubmit, handleRemove, handleComplete,
    handleSortOrderChange, handleEdit, handleFilterBy, handleCategoryChange, setSearchQuery
  };
}