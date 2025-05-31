
//REST OPERATOR

//Situação Problema:
// Informar lista de convidados

// function convidados(...nomes) {
//     console.log("|_____Seja bem vindo todos os convidados_____|")
//     console.log(nomes);
// }

// convidados("Adriel", "Natalia", "Brian", "Maria", "Simba", "Nala");


function sorteador(...numeros) {
    console.log(numeros)

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log("E o numero gerado foi: " + numeros[numeroGerado])
}


sorteador(1, 4, 5, 15, 25, 90, 55, 34);