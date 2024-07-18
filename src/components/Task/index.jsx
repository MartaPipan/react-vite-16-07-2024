import PropTypes from "prop-types";

const Task = (props) => {
  const {
      task: { id, content, isDone },
      setIsDone,
      deleteTask,
  } = props;
  return (
    <li>
          <input type="checkbox" checked={isDone} onChange={()=>setIsDone(id)} />
      <span>{content}</span>
          <button onClick={() => {deleteTask(id)}}>X</button>
    </li>
  );
};

Task.propTypes = {
    task: PropTypes.shape({                            //shape significa [objet]
    id: PropTypes.string.isRequired,              
    content: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
    setIsDone: PropTypes.func,
    deleteTask: PropTypes.func,
};

export default Task;
