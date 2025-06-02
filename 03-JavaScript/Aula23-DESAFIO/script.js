
/*
 1) Verificador de Número Negativo, Positivo ou Zero: 
 Escreva uma função que recebe um número como parâmetro e verifica se é negativo positivo ou igual a zero. 
 A função deve retornar uma string indicando o resultado. 
 */

let numero = -5;

function verificaNumero() {
    if (numero === 0) {
        console.log("O número é zero");
    } else if (numero < 0) {
        console.log("O número é negativo");
    } else {
        console.log("O número é positivo");
    }
}

verificaNumero(0);


/*2) Desafio da Verificação de Elemento em um Array: 
Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números.
*/

let lista = [50, 40, 30, 20, 10];
let numeroParaVerificar = 60

function listaVerificacao(lista, numero) {
    if (lista.includes(numero)) {
        console.log(`O número ${numero} está na lista!`);
    } else {
        console.log(`O número ${numero} não está na lista!`);
    }
}

listaVerificacao(lista, numeroParaVerificar);


/*
3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

 3.1) Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?

*/

const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
];

function produtoPrecoIgual(lista, preco) {
    let produtoEncontrado = lista.find(item => item.price === preco);

    if (produtoEncontrado) {
        console.log(`Produto encontrado: ${produtoEncontrado.name} com preço de R$ ${produtoEncontrado.price}`);
    } else {
        console.log(`Nenhum produto encontrado com o preço de R$ ${preco}`);
    }
}

produtoPrecoIgual(products, 20);

function produtosPrecoMenor(lista, preco) {
    let produtosFiltrados = lista.filter(item => item.price < preco);

    if (produtosFiltrados.length > 0) {
        console.log(`Produtos com preço menor que R$ ${preco}: `);
        produtosFiltrados.forEach(item => {
            console.log(` - ${item.name} por R$ ${item.price}`);
        });
    }
}

produtosPrecoMenor(products, 8);
