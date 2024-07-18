import { Formik, Form, Field } from "formik";
import useTodo from "../../hooks/useTodo";
import Task from "../Task";
import styles from "./Todo.module.scss";

const Todo = () => {
  const { tasks, addTask, setIsDone, deleteTask } = useTodo([
    { id: "1", content: "test task", isDone: false },
  ]);

  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };

  return (
    <section className={styles.todoContainer}>
      <h2 className={styles.header}>To-Do List</h2>

      <div className={styles.taskListContainer}>
        <h3 className={styles.title}>Tasks</h3>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              setIsDone={setIsDone}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
      <div className={styles.formContainer}>
        <h3 className={styles.title}>New Task</h3>
        <Formik initialValues={{ content: "" }} onSubmit={onSubmit}>
          <Form className={styles.form}>
            <Field
              name="content"
              //placeholder="Enter task"
              className={styles.input}
            />
            <input type="submit" value="ADD" className={styles.addButton} />
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Todo;
