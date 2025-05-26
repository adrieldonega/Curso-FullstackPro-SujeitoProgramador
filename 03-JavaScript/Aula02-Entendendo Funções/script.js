// Entendendo Funções

// document -> seleciona o documento html
// document.getElementById -> seleciona o documento pelo ID declarado

// document.createElement -> cria uma elemento no documento HTML
// append.Child() -> adiciona mais um item no ID selecionado

var area = document.getElementById('area')

function entrar() {
    var nome = prompt("Digite seu nome: ");

    // Criar um bloco condicional para quando o usuario não digitar nada ou deixar em branco, nao aparecer nada no documento.

    // Se nome for igual a 'vazio' OU nome for igual a null, vai aparecer um alerta "Ops algo deu errado"
    if (nome === '' || nome === null) {
        alert("Ops algo deu errado")
        area.innerHTML = "Clique no botao para acessar"

        // se o usuario digitar algo, vai aparecer a mensagem Bem vindo + nome do usuario.
    } else {
        // dentro do H2 quero injetar um HTML + a variavel declarada.
        area.innerHTML = "Bem vindo " + nome + "<br> ";


        // Criando um botao com o Javascript
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";

        // quando o usuario CLICAR (onclick) no botao Sair, será executada a função criada fora do escopo.
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);

    }
}

// Criando uma função para limpar a tela e colocar no id area um botao clique para acessar

function sair() {
    alert("Até mais!")
    area.innerHTML = "Você saiu!"
    
}

