import useTodo from "../../hooks/useTodo";

const Todo = () => {
  const [tasks, setTasks] = useTodo([
    { id: 1, content: "content", isDone: false },
  ]);

    return (
      
        
    <section>
      <h2>Todo</h2>
      <div>
        <h3>List Tasks</h3>
        <ol>
          {tasks.map((task) => (
            <li key={task.id}>{task.content}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Todo;
