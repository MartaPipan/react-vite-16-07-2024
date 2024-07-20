import PropTypes from "prop-types";
import cx from "classnames";
import styles from './Task.module.scss';

const Task = ({ task, setIsDone, deleteTask }) => {
  const { id, content, isDone } = task;

  const spanClasses = cx(styles.content, { [styles['is-done']]: isDone });

  return (
    <li className={styles.taskItem}>
      <input type="checkbox" checked={isDone} onChange={() => setIsDone(id)} />
      <span className={spanClasses}>{content}</span>
      <button onClick={() => deleteTask(id)}>X</button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  setIsDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
