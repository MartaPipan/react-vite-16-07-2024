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
    setTasks([...tasks, newTask]);
  };

  return { tasks, setTasks, addTask };
};

export default useTodo;
