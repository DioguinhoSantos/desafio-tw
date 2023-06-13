// Função para adicionar uma nova tarefa
function addTask(period) {
    const taskInput = document.getElementById(`${period}-task-input`);
    const taskValue = taskInput.value.trim();
    if (taskValue !== '') {
      const taskList = document.getElementById(`${period}-tasks-list`);
      const newTask = document.createElement("li");
      
      const taskText = document.createElement("span");
      taskText.innerText = taskValue;
      
      const editButton = document.createElement("button");
      editButton.innerText = "Editar";
      editButton.onclick = function () {
        editTask(taskText);
      };
      
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Excluir";
      deleteButton.onclick = function () {
        deleteTask(newTask);
      };
      
      newTask.appendChild(taskText);
      newTask.appendChild(editButton);
      newTask.appendChild(deleteButton);
      
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }
  
  // Função para editar uma tarefa existente
  function editTask(taskText) {
    const newTaskInput = prompt("Digite a tarefa atualizada:", taskText.innerText);
    if (newTaskInput) {
      taskText.innerText = newTaskInput;
    }
  }
  
  // Função para excluir uma tarefa
  function deleteTask(taskElement) {
    taskElement.remove();
  }
  