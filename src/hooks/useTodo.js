import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useTodo = (initialTasks) => {
  const [tasks, setTasks] = useState([...initialTasks]);
  
  const addTask = (values) => {
    const newTask = {
      id: uuidv4(),
      content: values.content,
      isDone: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

   const setIsDone = (id) => { 
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, isDone: true } : task);
        setTasks(newTasks);
   }
  
    const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };



  return { tasks, addTask, setIsDone, deleteTask};
};

export default useTodo;
