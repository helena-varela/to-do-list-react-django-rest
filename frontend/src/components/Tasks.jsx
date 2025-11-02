import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick, ShowDescription }) {
  return (
    <ul>
      {tasks.map((task) => {
        const title =
          task.title.length > 20 ? `${task.title.slice(0, 20)}...` : task.title;

        return (
          <li key={task.id}>
            <button
              onClick={() => onTaskClick(task.id)}
              className={`button-task ${task.completed ? "line-through" : ""}`}
            >
              {title}
            </button>

            <button
              onClick={() => ShowDescription(task.id)}
              className="button-detail"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <button onClick={() => onDeleteTaskClick(task.id)} className="button-delete"> <FontAwesomeIcon icon={faTrash} /></button>
          </li>
        );
      })}
    </ul>
  );
}

export default Tasks;

// <ul>
//     {tasks.map((task) => (
//         <li key={task.id}>
//         <button onClick={() => onTaskClick(task.id)} className={`button-task ${task.completed ? "line-through": ""}`}>
//             {title}
//         </button>
//         <button onClick={() => ShowDescription(task.id)} className="button-detail"><FontAwesomeIcon icon={faChevronRight} /></button>
//         <button onClick={() => onDeleteTaskClick(task.id)} className="button-delete"> <FontAwesomeIcon icon={faTrash} /></button>
//         </li>)
//     )}
// </ul> // para cada renderiza um parágrafo
