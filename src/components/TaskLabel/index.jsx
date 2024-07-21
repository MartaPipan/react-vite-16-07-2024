import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { mdiPlus, mdiChevronDownBox } from "@mdi/js";
import Icon from "@mdi/react";
import useTodo from "../../hooks/useNovoTodo";
import Task from "../NovoTask";
import styles from './TaskLabel.module.scss';

const TaskLabel = () => {
  const { tasks, addTask, setIsDone, deleteTask, showTasks, toggleShowTasks } = useTodo();

  const TaskSchema = Yup.object().shape({
    content: Yup.string()
      .min(2, "Too Short!")
      .max(64, "Too Long!")
      .required("Required"),
  });

  const onSubmit = (values, formikBag) => {
    addTask(values.content);
    formikBag.resetForm();
  };

  const renderForm = ({ errors, touched }) => {
    const inputClassNames = `${styles.input} ${
      errors.content && touched.content ? styles.invalid : ""
    }`;

    return (
      <Form className={styles.form}>
        <label className={styles.label}>
          Task
          <Field
            name="content"
            placeholder="Enter task..."
            className={inputClassNames}
          />
          <div className={styles.errorMessageContainer}>
            {errors.content && touched.content && (
              <div className={styles.error}>{errors.content}</div>
            )}
          </div>
        </label>
        <button type="submit" className={styles.addButton}>
          <Icon path={mdiPlus} size={1} />
        </button>
      </Form>
    );
  };

  return (
    <section className={styles.todoContainer}>
      <h2 className={styles.header}>AbacaxiGuy's Todo List</h2>
      <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <Formik
            initialValues={{ content: "" }}
            validationSchema={TaskSchema}
            onSubmit={onSubmit}
          >
            {renderForm}
          </Formik>
        </div>
        <div className={styles.controlsContainer}>
          <h4 className={styles.allTasks}>All</h4>
          <button
            type="button"
            className={styles.toggleButton}
            onClick={toggleShowTasks}
          >
            <Icon path={mdiChevronDownBox} size={1} />
          </button>
        </div>
      </div>
      {showTasks && (
        <div className={styles.taskListContainer}>
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
      )}
    </section>
  );
};

export default TaskLabel;
