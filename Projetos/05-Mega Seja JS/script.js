/*
    * Crie uma função que espere como argumento um numero e esse numero precisa ser de 6 a 9, caso seja um numero menor que 6 ou maior que 9 essa função deverá retornar um array vazio e um aviso no console que não é possivel usar esse numero.
    * Dentro da função você deverá pegar o numero recebido como argumento e gerar uma lista de numeros aleatorios com base no tamanho do argumento, exemplo se o usuario mandou 6 você deverá gerar uma lista de numeros contendo 6 numeros aleatorios sem repetir nenhum e os numero gerados precisam ser entre 01 e 60.
    * E ao final deverá retornar uma lista com os numeros gerados.


*/

function gerarNumerosAleatorios(qtdNumeros) {

    if (qtdNumeros < 6 || qtdNumeros > 9) {
        console.log("Apenas numeros de 6 até 9")
        return [];
    }

    const numeros = [];

    while (numeros.length < qtdNumeros) {
        const numeroAleatorio = Math.floor(Math.random() * 60 + 1);

        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }
    return numeros;
}

const numeroSorteado = gerarNumerosAleatorios(6)
console.log(numeroSorteado)