import { Formik, Form, Field } from "formik";
import useTodo from "../../hooks/useTodo";
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
        <Formik initialValues={{ content:''}} onSubmit={addTask}>
          <Form>
            <Field name="content" placeholder="Enter task" />
            <input type="submit" value="Add" />
          </Form>
        </Formik>
      </div>
      <div>
        <h3>List Tasks</h3>
        <ol>
          {tasks.map((task) => <li key={task.id}>{task.content}</li>
          )}
        </ol>
      </div>
    </section>
  );
};

export default Todo;
