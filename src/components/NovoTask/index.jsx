import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./NovoTask.module.scss";
import Icon from "@mdi/react";
import { mdiDelete, mdiCheckOutline } from "@mdi/js";

const NovoTask = (props) => {
  const {
    task: { id, content, isDone },
    setIsDone,
    deleteTask,
  } = props;

  // classNames fora do return
  const inputClassNames = cx(styles.input, { [styles.done]: isDone });
  const checkIconClassNames = cx(styles.checkIcon, { [styles.checked]: isDone });

  return (
    <li className={styles.taskItem}>
      <div className={styles.inputContainer}>
        <input type="text" readOnly value={content} className={inputClassNames} />
        <Icon
          path={mdiCheckOutline}
          size={2}
          className={checkIconClassNames}
          onClick={() => setIsDone(id)}
        />
        <button className={styles.deleteButton} onClick={() => deleteTask(id)}>
          <Icon path={mdiDelete} size={1} />
        </button>
      </div>
    </li>
  );
};

NovoTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
  setIsDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default NovoTask;
