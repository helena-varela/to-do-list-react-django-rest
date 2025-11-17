import AddTask from "./AddTask"; 
import Tasks from "./Tasks"; 
import { useNavigate } from 'react-router-dom';

function Home({ tasks, onTaskClick, onDeleteTaskClick, onAddTaskSubmit}) {
    
    const navigate = useNavigate(); 
    
    const handleShowDescription = (taskId) => {
        navigate(`/tasks/${taskId}`); 
    };

    const handleUpdateTask = (taskId) => {
        navigate(`/tasks/update/${taskId}`)
    }
    return(
    <div>
        <h1 className="principal-text">To-Do List</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <div className="tasks-content"
        style={{ display: tasks && tasks.length > 0 ? 'block' : 'none' }}>
            <Tasks 
                tasks={tasks} 
                onTaskClick={onTaskClick} 
                onDeleteTaskClick={onDeleteTaskClick}
                ShowDescription={handleShowDescription}
                UpdateTaskDescription={handleUpdateTask}
            />
        </div>
    </div>
    )
}

export default Home;