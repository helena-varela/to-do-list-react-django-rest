import { useNavigate, useParams } from "react-router-dom";
import { useState} from "react";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line no-unused-vars
function UpdateTaskDescription({ tasks, onEditTaskClick }) {
  const navigate = useNavigate();
  const { taskId } = useParams(); 
  const taskIdNumerico = parseInt(taskId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const handleGoBack = () => navigate(-1);

  return (
    <div>
      <h1>Editar Task</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <button onClick={handleGoBack} className="btn-back">
        <FontAwesomeIcon className="arrow-left" icon={faChevronLeft} /> Voltar
      </button>
      <button onClick={() => onEditTaskClick(taskIdNumerico, title, description)} >
        Salvar
      </button>
    </div>
  );
}

export default UpdateTaskDescription;
