import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useTodo = (initialTasks) => {
  const [tasks, setTasks] = useState([...initialTasks]);
   const [showTasks, setShowTasks] = useState(true);


  const addTask = (values) => {
    const newTask = {
      id: uuidv4(),
      content: values.content,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };
    
    
  const setIsDone = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task);
    setTasks(newTasks);
  };
    

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    };
  
   const toggleShowTasks = () => {
    setShowTasks(showTasks);
  };
  
  

  return { tasks, setTasks, addTask, setIsDone, deleteTask, showTasks, toggleShowTasks};
};

export default useTodo;
