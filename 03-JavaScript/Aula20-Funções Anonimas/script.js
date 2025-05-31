
//FUNÇÕES ANONIMAS -> são funções que não possuem nome, são criadas e executadas imediatamente.

/* 
SINTAXE: () => {} 
    1- Os parênteses, que é por onde a função recebe os argumentos (parametros, assim como nas funções tradicionais)
    2- O operador "=>" que indica que é uma função de seta
    3- O bloco de código que será executado
*/

function somar(a, b) {
    let total = a + b;
    return console.log(total);
}

//somar(10, 30);

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;
    return console.log(total);
}

//subtrair(60, 30);

let numeros = [1, 3, 5, 10];

numeros.map((item) => {
    console.log(item);
})

