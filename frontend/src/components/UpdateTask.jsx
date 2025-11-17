import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UpdateTask.css";

// eslint-disable-next-line no-unused-vars
function UpdateTaskDescription({ tasks, onEditTaskClick }) {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const taskIdNumerico = parseInt(taskId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleGoBack = () => navigate(-1);

  return (
    <div className="add-task">
      <h1 className="edit-task">Editar Tarefa</h1>
      <div className="inputs-content">
        <label htmlFor="title">Nova Tarefa</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Edite o nome da sua tarefa"
        />
        <label htmlFor="description">Nova Descrição</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Edite sua descrição"
        />
      </div>
      <div className="buttons-updatetask">
        <button
          type="submit"
          onClick={() => 
            onEditTaskClick(taskIdNumerico, title, description, handleGoBack)
          }
        >
          Salvar
        </button>
        <button onClick={handleGoBack} className="btn-back">
          <FontAwesomeIcon className="arrow-left" icon={faChevronLeft} /> Voltar
        </button>
      </div>
    </div>
  );
}

export default UpdateTaskDescription;
