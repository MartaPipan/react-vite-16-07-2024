import PropTypes from "prop-types";

const Task = (props) => {
  const {
    task: { content, isDone },
  } = props;
  return (
    <li>
      <input type="checkbox" value={isDone} />
      <span>{content}</span>
      <button>X</button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({                         //shape significa [objet]
    content: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
};

export default Task;
