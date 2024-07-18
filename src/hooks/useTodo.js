import { useState } from "react";


const useTodo = (initialTasks) => {
    const [tasks, setTasks] = useState([...initialTasks]);

    return { tasks, setTasks };
};
export default useTodo;