import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./description.css";

function ShowDescription({ tasks }) {
  const navigate = useNavigate();

  const { taskId } = useParams();

  // converte a string da URL para um número
  const taskIdNumerico = parseInt(taskId);

  const foundTask = tasks.find((task) => task.id === taskIdNumerico);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="description-content">
      <h1 className="task-name">{foundTask.title}</h1>
      <div className="task-description">
        <p>
          {foundTask.description}
        </p>
      </div>
      <div className="div-btn">
        <button onClick={handleGoBack} className="btn-back">
          <FontAwesomeIcon className="arrow-left" icon={faChevronLeft} /> Voltar
        </button>
      </div>
    </div>
  );
}

export default ShowDescription;
