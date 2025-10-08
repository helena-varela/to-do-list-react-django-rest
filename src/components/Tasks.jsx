import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Tasks({tasks, onTaskClick, onDeleteTaskClick,}){

    return( 
        <ul>
            {tasks.map((task) => (
                <li key={tasks.id}>
                <button onClick={() => onTaskClick(task.id)} className={`button-task ${task.isCompleted ? "line-through": ""}`}>
                    {task.title}
                </button>
                <button className="button-detail"><FontAwesomeIcon icon={faChevronRight} /></button>
                <button onClick={() => onDeleteTaskClick(task.id)} className="button-delete"> <FontAwesomeIcon icon={faTrash} /></button>
                </li>)
            )}
        </ul> // para cada renderiza um parágrafo
    )
}

export default Tasks