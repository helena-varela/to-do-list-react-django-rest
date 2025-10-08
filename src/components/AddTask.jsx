import { useState } from "react";

function AddTask({onAddTaskSubmit}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="add-task">
      <div className="inputs-content">
        <label htmlFor="title">Tarefa</label>
        <input 
          type="text" 
          id="title" 
          placeholder="Digite o título da tarefa" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          />

        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          id="description"
          placeholder="Digite a descrição da tarefa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

      </div>
      <button 
      onClick={(event) => {
        if (!title.trim() || !description.trim()){
          return alert("Preencha o título e a descrição!");
        }
        onAddTaskSubmit(title, description);
        setTitle("");
        setDescription("");
      }}>Adicionar</button>
    </div>
  );
}

export default AddTask;
