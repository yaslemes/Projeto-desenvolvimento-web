// Mudança de tema
const botaoTema = document.getElementById("toggle-theme");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const temaEscuro = document.body.classList.contains("dark-mode");

    localStorage.setItem("tema", temaEscuro ? "escuro" : "claro");

    const icone = document.querySelector("#toggle-theme i");
    icone.className = temaEscuro ? "fas fa-sun" : "fas fa-moon";
});

window.addEventListener("load", () => {
    const modal = document.getElementById("nossoModal");
    modal.style.display = "none";

    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");
        document.querySelector("#toggle-theme i").className = "fas fa-sun";
    }
});

// Função para atualizar a barra de progresso
function updateProgress() {
    const totalTasks = document.querySelectorAll('#taskList li').length;
    const completedTasks = document.querySelectorAll('#taskList li.concluida').length;

    // Atualizando a barra de progresso
    const progressBar = document.getElementById('progressBar');
    const progressLabel = document.getElementById('progressLabel');
    
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    progressBar.value = progress;

   
progressLabel.textContent =` ${completedTasks}/${totalTasks}`
}

// Função para adicionar tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        
        // Criação do círculo de tarefa concluída
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.addEventListener('click', function() {
            li.classList.toggle('concluida');
            // Alteração do estado do círculo
            if (li.classList.contains('concluida')) {
                circle.style.backgroundImage = 'url("imagens/concluidodark.png")'; // Ícone de concluído
                circle.style.backgroundSize = 'cover';
            } else {
                circle.style.backgroundImage = ''; // Retira o ícone quando não concluído
            }
            updateProgress();  // Atualiza as estatísticas e a barra de progresso
        });

        // Texto da tarefa
        const textNode = document.createElement('span');
        textNode.textContent = taskText;
        textNode.style.flex = "1"; 

        // Ícone de edição
        const editar = document.createElement('img');
editar.src = 'imagens/lapis.png';
editar.alt = 'Editar';
editar.title = 'Editar tarefa';
editar.addEventListener('click', () => {
    if (textNode.isContentEditable) {
        textNode.contentEditable = "false";
        editar.src = 'imagens/lapis.png';
    } else {
        textNode.contentEditable = "true";
        textNode.focus(); 
        editar.src = 'imagens/salvar.png';
        editar.title = 'Salvar'
        editar.title = 'Salvar edição'
    }
        });

        // Ícone de exclusão
        const lixeira = document.createElement('img');
        lixeira.src = 'imagens/lixeira.png';
        lixeira.alt = 'Excluir';
        lixeira.title = 'Excluir tarefa';
        lixeira.addEventListener('click', function() {
            li.remove();
            updateProgress(); 
        });

        // Contêiner para os ícones
        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icons');
        iconsContainer.appendChild(editar);
        iconsContainer.appendChild(lixeira);

        // Montando a estrutura do item da lista
        li.appendChild(circle);
        li.appendChild(textNode);
        li.appendChild(iconsContainer);

        const taskList = document.getElementById('taskList');
        taskList.appendChild(li);

        // Limpa o campo de entrada
        taskInput.value = '';

        updateProgress();  
    }
}

function updateProgress() {
const totalTasks = document.querySelectorAll('#taskList li').length;
const completedTasks = document.querySelectorAll('#taskList li.concluida').length;

const progressBar = document.getElementById('progressBar');
const progressLabel = document.getElementById('progressLabel');
const progressPercentage = document.getElementById('progressPercentage');

const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
progressBar.value = progress;

progressLabel.textContent = `${completedTasks}/${totalTasks}`;
progressPercentage.textContent = `${Math.round(progress)}%`;

if (completedTasks === totalTasks && totalTasks > 0) {
progressPercentage.textContent = "✅";
    }
}

// Modal de informações
const modal = document.getElementById("nossoModal");
const fecharModal = document.getElementById("fecharModal");


window.addEventListener("load", () => {
    modal.style.display = "none";  
});


document.addEventListener("keydown", (event) => {
    
    if (event.ctrlKey && event.key === "h") {
        event.preventDefault();
        modal.style.display = "flex";  
    }
});


fecharModal.addEventListener("click", () => {
    modal.style.display = "none";  
});