
//querySelector -> Seleciona o primeiro elemento em um documento HTML que corresponda a um seletor CSS especificado.

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

//Armazenando a lista de tarefas dentro de um array, a lista será preenchida automaticamente dentro do array.
let tarefas = [];

function renderTarefas() {
    listElement.innerHTML = "";  //Acessa a UL do documento HTML e zera a array caso tenha algo dentro dela.

    //Renderizando a array na tela

    // .map() -> percorre todos os itens dentro da array, e dentro do map posso ter acesso ao elemento que está passando.  
    tarefas.map((todo) => {
        // .createElement -> Cria um elemento no documento. No caso um (li)
        let liElement = document.createElement("li");

        // .createTextNode -> Cria um texto 
        let tarefaText = document.createTextNode(todo);


        //Adicionando na ul o (todo)
        liElement.appendChild(tarefaText);
        listElement.appendChild(liElement);
    })

}


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


    }
}

buttonElement.onclick = adicionarTarefas;