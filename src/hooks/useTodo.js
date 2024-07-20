import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useTodo = (initialTasks = []) => {
  const [tasks, setTasks] = useState(initialTasks);

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

  return { tasks, addTask, setIsDone, deleteTask };
};

export default useTodo;
