import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick, ShowDescription, UpdateTaskDescription }) {
  return (
    <ul>
      {tasks.map((task) => {
        const title =
          task.title.length > 20 ? `${task.title.slice(0, 20)}...` : task.title;

        return (
          <li key={task.id} className="tasks-and-icons">
            <div>
              <button
                onClick={() => onTaskClick(task.id)}
                className={`button-task ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {title}
              </button>
            </div>
            <div className="icons-task">
              <button
                onClick={() => ShowDescription(task.id)}
                className="buttons-icons"
              >
                <FontAwesomeIcon icon={faChevronRight} /> 
              </button>

              <button
                onClick={() => UpdateTaskDescription(task.id)}
                className="buttons-icons"
              >
                <FontAwesomeIcon icon={faPencil} />
              </button>

              <button
                onClick={() => onDeleteTaskClick(task.id)}
                className="buttons-icons"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Tasks;
