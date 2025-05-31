// Desafio de JavaScript - Manipulação de Listas e Strings


//criação da lista
let produtos = ["Computador", " Telefone", " Mouse", " Teclado"];

console.log("A lista completa fica assim: " + produtos);

//quantidade de itens na lista
let tamanhoDaLista = produtos.length;
console.log("O tamanho da lista é: " + tamanhoDaLista + " itens")

//removendo o mouse da lista
let novaLista = produtos.filter(item => item !== " Mouse"); // Usando filter para remover o item "Mouse"
console.log("A lista sem o mouse fica assim: " + novaLista)

//buscando por um produto
let buscaProduto = " Computador";
let produtoEncontrado = novaLista.find(item => item.trim() === buscaProduto.trim()); // Usando trim() para remover espaços em branco
if (produtoEncontrado) {
    console.log(`O produto ${produtoEncontrado} existe na lista.`);
} else {
    console.log("O produto não foi encontrado.");
}

//Removendo o segundo item da lista
novaLista.splice(1, 1); // Remove o segundo item (índice 1)
console.log("A lista após remover o segundo item fica assim: " + novaLista);

// Lista de numeros
let numeros = [1, 3, 5, 7, 0, 9];

let numerosCrescentes = numeros.sort((a, b) => a - b); // Ordena do menor para o maior
console.log("Lista de números ordenada do menor para o maior: " + numeros);

// Retirando o primeiro número da lista
numerosCrescentes.shift();
console.log("Lista após remover o primeiro número: " + numerosCrescentes);

// Invertendo a ordem da lista
numerosCrescentes.reverse();
console.log("Lista após inverter a ordem: " + numerosCrescentes);

// Separando a data em variáveis
let hoje = "25/05/2025";

let [dia, mes, ano] = hoje.split("/"); // Usando split para separar a string
console.log(`Dia: ${dia}, Mês: ${mes}. Ano: ${ano}`);

// Exibindo as variáveis separadas
console.log("Dia: " + dia);
console.log("Mês: " + mes);
console.log("Ano: " + ano);