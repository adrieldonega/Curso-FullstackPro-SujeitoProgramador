// Switch -> É uma expressão de casos, para acesso a opção ou condição que for digitada pelo usuario.

//Vamos criar um menu para um usuario comprar um item.

//Para converter uma String para um Numero, utilizamos a palavra Number(nomeDaVariavel) e colocamos dentro do pararenteses o nome da variavel a ser convertida

function pedir() {
    var valor = prompt("Digite um valor de 1 a 4")


    switch (Number(valor)) {
        case 1:
            alert("Voce escolheu 1 = Suco");
            break;
        case 2:
            alert("Voce escolheu 2 = Agua gelada");
            break;
        case 3:
            alert("Voce escolheu 3 = Sorvete");
            break;
        case 4:
            alert("Voce chamou o garçom");
            break;
        default:
            alert("Escolha entre 1 a 4");
            break;
    }
}

//Condicionais

var valor = 30;

if (valor === 30) {
    console.log("Sim o valor é igual a 30")
} else {
    console.log("Numero diferente de 30")
}

var nome = "Adriel";
var userOnline = false;

if (userOnline === true) {
    console.log("Usuario está online")
} else {
    console.log("Usuario está offline")
}

// Operador de comparação Ternario

// O ponto de interrogação (?) é o mesmo de if
// Os dois pontos (:) é o mesmo do else




var numero = 10;

numero === 10 ? console.log("Numero é igual a 10") : console.log("Numero diferente de 10");