
/*

//querySelector -> Seleciona o primeiro elemento em um documento HTML que corresponda a um seletor CSS especificado.

// .splice() -> remove o item do Array
// .indexOf() -> descobre em qual posição o item se encontra.

//_________________________________________________________________PRIMEIRO PASSO - DECLARAÇÃO DAS VARIAVEIS E DECLARAÇÃO DA LISTA (ARRAY)
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

//Armazenando a lista de tarefas dentro de um array, a lista será preenchida automaticamente dentro do array.
let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];
//_________________________________________________________________FIM PRIMEIRO PASSO


//_________________________________________________________________TERCEIRO PASSO - FAZENDO APARECER A TAREFA NO DOCUMENTO HTML
function renderTarefas() {
    listElement.innerHTML = "";  //Acessa a UL do documento HTML e zera a array caso tenha algo dentro dela.

    //Renderizando a array na tela

    // .map() -> percorre todos os itens dentro da array, e dentro do map posso ter acesso ao elemento que está passando.  
    tarefas.map((todo) => {

        // .createElement -> Cria um elemento no documento. No caso um (li)
        let liElement = document.createElement("li");

        // .createTextNode -> Cria um texto 
        let tarefaText = document.createTextNode(todo);

        // Criando uma ancora para o botao de excluir
        let linkElement = document.createElement("a");

        // .setAtribute -> Adiciona um atributo ao elemento
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);


        //Adicionando na ul o (todo)
        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })

}
//___________________________________________________________________FIM TERCEIRO PASSO 

renderTarefas();

//___________________________________________________________________SEGUNDO PASSO - INICIALIZANDO A FUNÇÃO DE ADICIONAR TAREFAS E ADICIONANDO UMA FUNÇÃO NO BOTAO
function adicionarTarefas() {

    //se o INPUT estiver vazio, emitir um alerta.
    if (inputElement.value === '') {
        alert("Digite alguma tarefa");
        return false; //para a execução e nao deixa prosseguir.
    } else {
        // Caso contrario o usuario preencheu alguma coisa.
        let novaTarefa = inputElement.value;

        // .push -> adiciona o novo item na tarefa/array.
        tarefas.push(novaTarefa);
        inputElement.value = ''; //limpa o input

        renderTarefas();
        salvarDados();


    }
}

buttonElement.onclick = adicionarTarefas;

//___________________________________________________________________FIM SEGUNDO PASSO

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvarDados();
}


// CRIANDO FUNÇÃO PARA SALVAR NO LOCAL STORAGE
function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}

//PROXIMOS PASSOS
// * ADICIONAR O BOTAO DE EDITAR
// * ESTILIZAR O BOTAO DE EXCLUIR
// * ADICIONAR LISTA DE PRIORIDADES/IMPORTANCIA DA TAREFA

*/


/*
PRIMEIRO PASSO: PREPARANDO OS ELEMENTOS
*/
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

/*
O que acontece aqui:
    -> Está "pegando" elementos do HTML e guardando em variaveis.
    -> querySelector é como um "localizador" - encontra elementos na pagina
*/

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

/*
Essa linha faz duas coisas:
    -> Tenta buscar tarefas salvas anteriormente no navegador.
    -> Se não encontrar nada, cria uma lista vazia []
*/


/*
TERCEIRO PASSO - MOSTRANDO AS TAREFAS NA TELA
*/

function renderTarefas() {
    listElement.innerHTML = ""; //limpa a lista na tela

    tarefas.map((todo, index) => {

        // .createElement -> Cria um elemento no documento
        let liElement = document.createElement("li");

        // .createTextNode -> Cria um texto
        let tarefaText = document.createTextNode(todo);

        //Criando o botao Editar
        let editLinkElement = document.createElement("a");
        editLinkElement.setAttribute("href", "#");
        editLinkElement.setAttribute("onclick", `editarTarefa(${index})`)
        let editLinkText = document.createTextNode("Editar");
        editLinkElement.appendChild(editLinkText);

        let espacoElement = document.createElement("span");
        espacoElement.className = "separator";
        espacoElement.textContent = " | ";

        // Criando uma ancora para o botao Excluir
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        linkElement.setAttribute("onclick", `deletarTarefa(${index})`);
        let linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText);

        liElement.appendChild(tarefaText);
        liElement.appendChild(document.createTextNode(" - ")); //Espaço antes dos botoes
        liElement.appendChild(editLinkElement);
        liElement.appendChild(espacoElement);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}
renderTarefas();

/* 
O que acontece:

    -> Limpa a lista na tela (para nao duplicar)
    -> Para cada tarefa na lista
        -> Cria um item de lista (<li>)
        -> Adiciona o texto da tarefa
        -> Cria um link "Excluir"
        -> Conecta tudo e coloca na tela.
*/

/*
SEGUNDO PASSO: ADICIONANDO TAREFAS
*/
function adicionarTarefas() {

    //se o INPUT estiver vazio, emitir um alerta
    if (inputElement.value === '') {
        alert("Digite alguma tarefa.");
        return false; //para a execução e não deixa prosseguir
    } else {

        //Caso contrario o usuario preencheu alguma coisa
        let novaTarefa = inputElement.value;

        // .psuh() -> adiciona o novo item na tarefa/array
        tarefas.push(novaTarefa);
        inputElement.value = ''; //limpa o input


        renderTarefas();
        salvarDados();
    }
}

buttonElement.onclick = adicionarTarefas;

/*
Passo a passo:
    -> Verifica se o campo está vazio - se estiver, mostra alerta.
    -> Pega o texto que o usuario digitou
    -> Adiciona na lista usando push() (é como colocar um item no final de uma fila)
    -> Limpa o campo de texto
    -> Atualiza a tela e salva os dados
*/

/*
EDITAR TAREFA
*/
/*
CRIANDO A FUNÇÃO editarTarefa()
*/
function editarTarefa(posicao) {

    // Pega o texto atual da tarefa
    let tarefaAtual = tarefas[posicao];

    //Mostra um prompt com o texto atual para o usuario editar
    let novoTexto = prompt("Edite sua tarefa:", tarefaAtual);

    // Se o usuario não cancelou e digitou algo
    if (novoTexto !== null && novoTexto.trim() !== '') {

        //Atualiza a tarefa na posicao especifica
        tarefas[posicao] = novoTexto.trim();

        //Atualiza a tela e salva
        renderTarefas();
        salvarDados();
    } else if (novoTexto !== null && novoTexto.trim() === '') {
        // Se deixou vazio, avisa
        alert("A tarefa não pode ficar vazia!")
    }
}




/*
EXCLUINDO TAREFAS
*/

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1) // Remove 1 item na posição indicada
    renderTarefas(); // Atualiza a tela
    salvarDados(); //Salva as mudanças.
}

/*
Como funciona: 
    -> splice(posicao, 1) é como uma tesoura que corta 1 item na posicao especifica
    -> Depois atualiza tudo na tela.
*/





/*
SALVANDO NO NAVEGADOR
*/

function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}

/*
O que faz:
    -> localStorage é como um cofre no seu navegador
    -> JSON.stringify converte sua lista em texto para poder salvar
    -> Assim suas tarefas ficam guardadas mesmo se voce fechar o navegador
*/

/*
FLUXO COMPLETO
    -> Pagina carrega -> Busca tarefas salvas -> Mostra na tela
    -> Usuario digita tarefa -> clica no botao -> Adiciona na lista -> Mostra na tela -> Salva
    -> Usuario clica "Excluir" -> Remove da lista -> Atualiza tela -> Salva

*/