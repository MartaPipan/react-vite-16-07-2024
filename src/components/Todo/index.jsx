import { Formik, Form, Field  } from "formik";
import useTodo from "../../hooks/useTodo";

const Todo = () => {
    const { tasks, addTask } = useTodo([
    { id: 1, content: "content", isDone: false },
  ]);

    return  <section>
            <h2>Todo</h2>
            <div>
                <Formik initialValues={{content:{}}} onSubmit={addTask}>
                    <Form>
                        <Field name='content'/>
                            <input type="submit" value="Add" />
                    </Form>
                </Formik>
            </div>
      <div>
        <h3>List Tasks</h3>
        <ol>
          {tasks.map((task) => (
            <li key={task.id}>{task.content}</li>
          ))}
        </ol>
      </div>
    </section>
};

export default Todo;
