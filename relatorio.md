# Relatório do projeto de desenvolvimento de web do 4º bimestre 


Para este projeto, decidimos fazer a raiz dele com uma abordagem prática utilizando exemplos de código   encontrados em fontes da internet, como **CodePen**, **JSFiddle**, e **W3Schools**. Esses exemplos foram adaptados e integrados para atender aos requisitos do trabalho e criar funcionalidades específicas. Abaixo estão os detalhes das funcionalidades desenvolvidas e como os exemplos foram utilizados.

### 📖  [README](README.md)

---

## Excalidraw para apresentar as divisões

[Excalidraw do projeto](https://excalidraw.com/#json=F7psazeZy8_UTF_IBhifP,MQGujQ7F1oA31Ad-bsZU1Q) 

## 1. Input e button

Digitamos no campo de entrada, e ao pressionar o botão `+` ou a tecla `enter` é adicionada uma `<li>` e dentro dela os ícones e um `<span>`.

**Fonte de exemplo:** [dio.me](http://dio.me/)

```javascript
// Funções
function adicionarTarefa() {
const tarefaTexto = tarefaInput.value;
if (tarefaTexto.trim() !== "") {
const novaTarefa = document.createElement("li");
novaTarefa.innerHTML =           ${tarefaTexto} <button class="excluir">Excluir</button>      ;
listaTarefas.appendChild(novaTarefa);
tarefaInput.value = "";
}
}
```

## 2. Ícone de edição da tarefa

Ao clicar no ícone de lápis, a tarefa entre no modo edição, e troca o ícone de edição pelo ícone de salvar, após, a edição é desativada e volta o ícone de lápis com o texto editado. 

**vídeo  assistido**: https://youtu.be/-pbPXEoqENI?si=GJsuiCgCE51W3o9c e ajuda do chatgpt 

**Código:**

```javascript
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
```

## 3. Ícone de exclusão da tarefa

Ao clicar na lixeira, a `<li>` correspondente é excluída da lista. 

**Código base para fazer:** [codepen.io](http://codepen.io/)

```javascript
function deleteTask(button) {
const li = button.parentElement;  // Encontra o item <li> que contém o botão
tasklist.removeChild(li);  // Remove o item <li> da lista
}
```

## 4. Botão `enter` para adição de tarefas

Exemplo com base no código do site [alura.com.br](http://alura.com.br/)

```javascript
<input type="text" id="meuInput">

<script>
  var meuInput = document.getElementById("meuInput");
  meuInput.addEventListener("keydown", function(event) {
    console.log(event.key);
  });
</script>
```

## 5. Alternância de Tema (Claro/Escuro)

**Fonte do Exemplo**: [CodePen](https://codepen.io/) — Pesquisamos por **"dark mode toggle"**.

O código base foi utilizado para alternar entre o tema claro e escuro com o clique de um botão. A funcionalidade inclui a persistência da escolha do usuário por meio do `localStorage`.

**Código de base:**

```javascript
// Alternar Tema
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Carregar Tema Salvo
window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

```

**Adaptações Realizadas**:

- Incluímos o armazenamento no `localStorage` para garantir que a preferência do usuário fosse preservada ao recarregar a página.
- Ajustamos a classe CSS `dark-mode` para personalizar o estilo de acordo com o design do projeto.

---

## 6. Modal com Atalho de Teclado

**Fonte do Exemplo**: [JSFiddle](https://jsfiddle.net/) — Exemplo de modais e atalhos de teclado.

Criamos um modal que é aberto ao pressionar `Ctrl + H` e pode ser fechado por um botão de "fechar", que usamos um “X”.

**Código de base**:

```html
<div id="infoModal" style="display: none;">
  <div class="modal-content">
    <span id="closeModal">&times;</span>
    <p>Informações importantes aqui...</p>
  </div>
</div>

<script>
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'h') {
      document.getElementById('infoModal').style.display = 'flex';
    }
  });

  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('infoModal').style.display = 'none';
  });
</script>

```

**Adaptações Realizadas**:

- Ajustamos o estilo do modal para combinar com a página.
- Adicionamos um evento de atalho no teclado (`Ctrl + H`) para abrir o modal, além do botão de fechamento.

### 7. Barra de Progresso com Fração

**Fonte do Exemplo**: [W3Schools](https://www.w3schools.com/)

O código base que adaptamos atualiza uma barra de progresso de acordo com a quantidade de tarefas concluídas, além de exibir a fração de tarefas completadas. Quando todas as tarefas são concluídas, um emoji de "check" (✔) é exibido.

**Código de Base:**

```javascript
// Função para atualizar a barra de progresso e a fração
function updateProgress() {
    const totalTasks = document.querySelectorAll('#taskList li').length;
    const completedTasks = document.querySelectorAll('#taskList li.concluida').length;

    const progressLabel = document.getElementById('progressLabel');
    const progressFraction = document.getElementById('progressFraction');

    // Exibe a fração das tarefas concluídas
    progressLabel.textContent = `${completedTasks}/${totalTasks}`;

    // Atualiza o progresso na barra
    const progressBar = document.getElementById('progressBar');
    progressBar.value = (completedTasks / totalTasks) * 100;

    // Exibe o emoji de check (✔) quando todas as tarefas estão concluídas
    if (completedTasks === totalTasks && totalTasks > 0) {
        progressFraction.textContent = "✔";
    } else {
        progressFraction.textContent = "";
    }
}

```

**Adaptações Realizadas**:

- A fração é agora exibida diretamente no rótulo da barra de progresso.
- O emoji de "check" (✔) é exibido quando todas as tarefas estão concluídas, com a fração visível ao lado.

**Videos / sites - tutoriais ultilizados:** 

Tema claro/escuro: 

- https://youtu.be/SBq-kXXn1PQ?si=2TE2V3WyLO54cWp8
- https://youtu.be/kEdfcv1XFIw?si=YdFYu-QEirXELelH
- https://ichi.pro/pt/alternador-de-tema-escuro-e-claro-usando-variaveis-css-e-javascript-puro-zocada-242993577013154
- https://blog.lfrigodesouza.net/2020/12/17/criando-um-tema-escuro-com-js-e-css/

**Modal com Atalho de Teclado:**

- https://youtu.be/kj6GFACwLYo?si=mzimHzd_kQz3mWcF
- https://youtu.be/pGJB5FgfdMI?si=fZZei8Rd8jGIBELK
- https://youtu.be/2jjbteTavm4?si=B8coPj52U9xlVAUY

 **Barra de Progresso com Fração:**

- https://youtu.be/Hs2qSkDeK_4?si=AYpRrl73WNjZS4eD
- https://github.com/guisinesio/progress-bar
- https://acervolima.com/como-criar-uma-barra-de-progresso-usando-html-e-css/
- https://www.freecodecamp.org/portuguese/news/como-criar-uma-barra-de-progresso-responsiva-e-dinamica-com-html-css-e-javascript/
- ChatGpt - Como fazer fração em barra de progresso

Playlist desenvolvida pelas criadoras do projeto:
https://youtube.com/playlist?list=PL-4AcutaMQviqCwTVQKCN8CQ_JgC6bHLd&si=CExDvZ1Df2jyxqEg
