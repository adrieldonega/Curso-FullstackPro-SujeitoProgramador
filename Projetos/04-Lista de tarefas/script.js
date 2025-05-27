
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