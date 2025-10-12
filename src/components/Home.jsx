import AddTask from "./AddTask"; 
import Tasks from "./Tasks"; 
import { useNavigate } from 'react-router-dom';

function Home({ tasks, onTaskClick, onDeleteTaskClick, onAddTaskSubmit}) {
    
    const navigate = useNavigate(); 
    
    const handleShowDescription = (taskId) => {
        navigate(`/tasks/${taskId}`); 
    };

    return(
    <div>
        <h1 className="principal-text">To-Do List</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <div className="tasks-content">
            <Tasks 
                tasks={tasks} 
                onTaskClick={onTaskClick} 
                onDeleteTaskClick={onDeleteTaskClick}
                ShowDescription={handleShowDescription}
            />
        </div>
    </div>
    )
}

export default Home;