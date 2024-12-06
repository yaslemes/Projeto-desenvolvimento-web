// Mudança de tema
const botaoTema = document.getElementById("toggle-theme");

// Adiciona um evento de clique ao botão para alternar o tema
botaoTema.addEventListener("click", () => {
    // Alterna a classe 'dark-mode' no body para aplicar ou remover o tema escuro
    document.body.classList.toggle("dark-mode");
    
    // Verifica se o tema escuro foi ativado
    const temaEscuro = document.body.classList.contains("dark-mode");

    // Salva a preferência de tema no localStorage
    localStorage.setItem("tema", temaEscuro ? "escuro" : "claro");

    // Muda o ícone do botão conforme o tema
    const icone = document.querySelector("#toggle-theme i");
    icone.className = temaEscuro ? "fas fa-sun" : "fas fa-moon";
});

// Carrega o tema salvo ao carregar a página
window.addEventListener("load", () => {
    const modal = document.getElementById("nossoModal");
    modal.style.display = "none";  // Fecha o modal ao carregar a página

    // Recupera o tema salvo no localStorage
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");
        document.querySelector("#toggle-theme i").className = "fas fa-sun";
    }
});

// Função para atualizar a barra de progresso e o emoji
function updateProgress() {
    const totalTasks = document.querySelectorAll('#taskList li').length;
    const completedTasks = document.querySelectorAll('#taskList li.concluida').length;

    const progressBar = document.getElementById('progressBar');
    const progressLabel = document.getElementById('progressLabel');
    const progressPercentage = document.getElementById('progressPercentage');

    // Calcula o progresso com base nas tarefas concluídas
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    progressBar.value = progress;

    // Atualiza o rótulo da barra de progresso
    progressLabel.textContent = `${completedTasks}/${totalTasks}`;

    // Exibe o emoji de check (✔) quando todas as tarefas estão concluídas
    if (completedTasks === totalTasks && totalTasks > 0) {
        progressPercentage.textContent = "✔";  
    } else {
        progressPercentage.textContent = "";  
    }
}

// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Verifica se o texto da tarefa não está vazio
    if (taskText !== '') {
        const li = document.createElement('li');
        
        // Criação de um círculo que indica a conclusão da tarefa
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.addEventListener('click', function() {
            // Marca ou desmarca a tarefa como concluída
            li.classList.toggle('concluida');
           
            // Altera a imagem de fundo do círculo dependendo do estado da tarefa
            if (li.classList.contains('concluida')) {
                circle.style.backgroundImage = 'url("imagens/concluidodark.png")';
                circle.style.backgroundSize = 'cover';
            } else {
                circle.style.backgroundImage = ''; 
            }
            updateProgress();  // Atualiza o progresso
        });

        // Criação do texto da tarefa
        const textNode = document.createElement('span');
        textNode.textContent = taskText;
        textNode.style.flex = "1"; // Faz o texto se expandir para ocupar o espaço restante

        // Ícone de edição para modificar o texto da tarefa
        const editar = document.createElement('img');
        editar.src = 'imagens/lapis.png';
        editar.alt = 'Editar';
        editar.title = 'Editar tarefa';
        editar.addEventListener('click', () => {
            // Alterna entre editar e salvar o texto da tarefa
            if (textNode.isContentEditable) {
                textNode.contentEditable = "false";
                editar.src = 'imagens/lapis.png';
            } else {
                textNode.contentEditable = "true";
                textNode.focus(); 
                editar.src = 'imagens/salvar.png';
                editar.title = 'Salvar';
            }
        });

        // Ícone de exclusão para remover a tarefa
        const lixeira = document.createElement('img');
        lixeira.src = 'imagens/lixeira.png';
        lixeira.alt = 'Excluir';
        lixeira.title = 'Excluir tarefa';
        lixeira.addEventListener('click', function() {
            // Remove a tarefa da lista
            li.remove();
            updateProgress();  // Atualiza o progresso
        });

        // Contêiner de ícones (edição e exclusão)
        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icons');
        iconsContainer.appendChild(editar);
        iconsContainer.appendChild(lixeira);

        // Adiciona os elementos à tarefa
        li.appendChild(circle);
        li.appendChild(textNode);
        li.appendChild(iconsContainer);

        const taskList = document.getElementById('taskList');
        taskList.appendChild(li);  // Adiciona a tarefa à lista

        taskInput.value = '';  // Limpa o campo de entrada

        updateProgress();  // Atualiza o progresso
    }
}

// Recarrega o tema salvo e atualiza o progresso ao carregar a página
window.addEventListener("load", () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");
        document.querySelector("#toggle-theme i").className = "fas fa-sun";
    }
    updateProgress();  // Atualiza o progresso na página inicial
});

// Modal de informações
const modal = document.getElementById("nossoModal");
const fecharModal = document.getElementById("fecharModal");

// Ao carregar a página, o modal estará fechado
window.addEventListener("load", () => {
    modal.style.display = "none";  
});

// Exibe o modal ao pressionar Ctrl+H
document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "h") {
        event.preventDefault();
        modal.style.display = "flex";  // Abre o modal
    }
});

// Fecha o modal quando o botão de fechar for clicado
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";  // Fecha o modal
});
