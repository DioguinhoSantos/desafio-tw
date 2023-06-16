// Função para adicionar uma nova tarefa
function addTask(period) {
    const inputTarefa = document.getElementById(`${period}-task-input`);
    const valueTarefa = inputTarefa.value.trim();
    
    if (valueTarefa !== '') {
      const listaTarefas = document.getElementById(`${period}-tasks-list`);

      const novaTarefa = document.createElement("li");
      novaTarefa.className = "task-item";
      
      const textoTarefa = document.createElement("span");
      textoTarefa.className = "task-text";
      textoTarefa.textContent = valueTarefa;

      const botoesTarefa = document.createElement('div');
      botoesTarefa.className = 'task-buttons';
      
      const botaoEditar = document.createElement("button");
      botaoEditar.textContent = "Editar";
      botaoEditar.className = "edit-button";
      botaoEditar.onclick = function () {
        editarTarefa(textoTarefa);
      };
      
      const botaoDeletar = document.createElement("button");
      botaoDeletar.textContent = "Excluir";
      botaoDeletar.className = "delete-button";
      botaoDeletar.onclick = function () {
        deletarTarefa(novaTarefa);
      };
      
      novaTarefa.appendChild(textoTarefa);
      botoesTarefa.appendChild(botaoEditar);
      botoesTarefa.appendChild(botaoDeletar);
      novaTarefa.appendChild(botoesTarefa);

      listaTarefas.appendChild(novaTarefa);
      inputTarefa.value = '';
    }
  }
  
  // Função para editar uma tarefa existente
  function editarTarefa(textoTarefa) {
    const tarefaEditada = prompt("Digite a nova tarega:", textoTarefa.textContent);
    if (tarefaEditada) {
      textoTarefa.textContent = tarefaEditada;
    }
  }
  
  // Função para excluir uma tarefa
  function deletarTarefa(tarefaADeletar) {
    tarefaADeletar.remove();
  }
  