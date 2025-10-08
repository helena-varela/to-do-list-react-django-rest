import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Aprender React",
      description: "Estudar componentes e States.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar FMC",
      description: "Estudar: Sistema Binário e Teorema Chinês do Resto.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Fazer listas de ITP",
      description: "Estudar arrays e ponteiros em C.",
      isCompleted: false,
    }
  ]);

    // Função para riscar a task se ela for concluída
  function onTaskClick(taskId){
    const newTasks = tasks.map((task) => { 
      // usa o .map() para percorrer a lista tasks e construir uma nova lista

      if (task.id === taskId){
      return{...task, isCompleted: !task.isCompleted};
      // spread operator: ...task cria um novo objeto oŕme sobrescreve o atributo isCompleted
      }
      return task
    });
    setTasks(newTasks);
    // renderiza a nova lista 
  }

  // Função para deletar tasks
  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <h1 className="principal-text">To-Do List</h1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
      <div className="tasks-content">
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}

export default App;
