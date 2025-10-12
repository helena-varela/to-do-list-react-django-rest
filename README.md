# 🚀 To-Do List React

Uma aplicação simples e moderna de lista de tarefas (To-Do List) desenvolvida em React. Este projeto foi criado com foco na prática de Gerenciamento de Estado (Hooks), Componentização, e Roteamento (React Router DOM).


## 💻 Funcionalidades
O aplicativo permite ao usuário gerenciar suas tarefas com as seguintes funcionalidades:

✅ Adicionar Tarefa: Criação de novas tarefas com título e descrição.

🗑️ Remover Tarefa: Exclusão de tarefas específicas com um clique.

✏️ Marcar como Concluída: Alternância do estado (isCompleted) da tarefa, aplicando um estilo visual (line-through).

➡️ Roteamento de Detalhes: Navegação dedicada para uma página de descrição (/tasks/:id) para visualizar detalhes e voltar para a lista.

🧭 Navegação Programática: Uso do useNavigate para controlar a navegação entre a lista principal e os detalhes.


## 🛠️ Tecnologias Utilizadas
As seguintes ferramentas foram utilizadas na construção deste projeto:

1. ReactJS: Biblioteca principal para construção da interface.

2. Vite: Ferramenta de build e servidor de desenvolvimento ultrarrápido.

3. JavaScript (ES6+): Linguagem de programação.

4. React Router DOM v6: Gerenciamento de rotas e URLs na aplicação.

5. Font Awesome: Biblioteca de ícones (lixeira, setas, etc.).


## 🗺️ Estrutura de Rotas
A aplicação utiliza roteamento do lado do cliente (client-side routing):

Caminho (Path)	Componente Renderizado	Função
/	Home	Lista principal de tarefas e formulário para adição.
/tasks/:taskId	ShowDescription (ou TaskDetails)	Exibe o título e a descrição da tarefa pelo ID.


# :computer: Acesse o link para dar uma olhadinha :)
https://todolist-helenavarela.netlify.app/
