import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const useTodo = () => {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(true);

  const addTask = (content) => {
    const newTask = {
      id: uuidv4(),
      content,
      isDone: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const setIsDone = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleShowTasks = () => {
    setShowTasks(prevShowTasks => !prevShowTasks);
  };

  return { tasks, addTask, setIsDone, deleteTask, showTasks, toggleShowTasks };
};

export default useTodo;
