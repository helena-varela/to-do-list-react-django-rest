import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShowDescription from "./components/Description";
import axios from 'axios';
import { useEffect } from "react";

const api = axios.create(
    {
    baseURL: 'http://127.0.0.1:8000/api/tasks',
    }
  );

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/")
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
      });
  }, []);

  // Função para riscar a task se ela for concluída
  function onTaskClick(taskId){
    api.put(`update/${taskId}`)
    // eslint-disable-next-line no-unused-vars
    .then((res) => {
      const newtasks = [...tasks]
      for (let i = 0; i < newtasks.length; i++) {
        if (newtasks[i].id === taskId){
          newtasks[i].completed = !newtasks[i].completed
        }
      }
      setTasks(newtasks);
    }).catch((erro) => {
      console.error("erro:", erro);
    })
    
  }

  // Função para deletar tasks
  function onDeleteTaskClick(taskId){
    api.delete(`delete/${taskId}`)
    .then((res) => {
      console.log(res.data);
      const newTasks = tasks.filter(task => task.id != taskId);
      setTasks(newTasks);
    }).catch((erro) => {
      console.error('erro:', erro);
    })
  }

  function onAddTaskSubmit(title, description){
    if (title.length > 50) {
    alert("O título não pode ter mais de 50 caracteres!");
    return; 
    }

    api.post("create", {
      title: title,
      description: description,
      isCompleted: false,
    }).then((res) => {
      console.log("Tarefa criada:", res.data);
      setTasks([...tasks, res.data]);}
    ).catch((err) => {
      console.error("Erro ao criar tarefa:", err);
    });

  }

  return (    
  
      <Routes> 

        <Route path="/" element={
                <Home 
                    tasks={tasks}
                    onTaskClick={onTaskClick}
                    onAddTaskSubmit={onAddTaskSubmit}
                    onDeleteTaskClick={onDeleteTaskClick}
                    />
        }/>

        <Route 
            path="/tasks/:taskId" 
            element={<ShowDescription tasks={tasks} />}  
        />
        
      </Routes>
    
  );
}

export default App;
