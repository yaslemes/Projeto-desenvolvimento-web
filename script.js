
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

// Função para adicionar tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        
        // Criação do círculo de tarefa concluída
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.addEventListener('click', () => {
            li.classList.toggle('concluida');
            // Alteração do estado do círculo
            if (li.classList.contains('concluida')) {
                circle.style.backgroundImage = 'url("imagens/concluidodark.png")'; // Ícone de concluído
                circle.style.backgroundSize = 'cover';
            } else {
                circle.style.backgroundImage = ''; 
            }
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
            }
        });

        
        

        // Ícone de exclusão
        const lixeira = document.createElement('img');
        lixeira.src = 'imagens/lixeira.png';
        lixeira.alt = 'Excluir';
        lixeira.title = 'Excluir tarefa';
        lixeira.addEventListener('click', () => {
            li.remove();
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
    }
}
// Modal de informações
const modal = document.getElementById("nossoModal");
const fecharModal = document.getElementById("fecharModal");

// Garantir que o modal esteja escondido ao carregar a página
window.addEventListener("load", () => {
    modal.style.display = "none";  // Garante que o modal esteja escondido na inicialização
});

// Evento para abrir o modal ao pressionar Ctrl + H
document.addEventListener("keydown", (event) => {
    // Verifica se Ctrl + H foi pressionado
    if (event.ctrlKey && event.key === "h") {
        event.preventDefault();
        modal.style.display = "flex";  // Exibe o modal quando Ctrl + H é pressionado
    }
});

// Fechar o modal quando o ícone de fechar for clicado
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";  // Esconde o modal quando o botão de fechar é pressionado
});

