import { Formik, Form, Field } from "formik";
import useTodo from "../../hooks/useTodo";
import Task from "../Task";
import styles from "./Todo.module.scss"; 

const Todo = () => {
  const { tasks, addTask } = useTodo([
    { id: 1, content: "test task", isDone: false },
  ]);
  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  }

  return (
    <section className={styles.todoContainer}> 
      <h2>Todo</h2>
      <div>
        <Formik initialValues={{ content:''}} onSubmit={onSubmit}>
          <Form>
            <Field name="content" placeholder="Enter task" />
            <input type="submit" value="Add" />
          </Form>
        </Formik>
      </div>
      <div>
        <h3>List Tasks</h3>
        <ol>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Todo;
