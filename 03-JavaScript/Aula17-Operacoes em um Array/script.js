
// Operações em Arrays


// MAP -> PERCORRER UM ARRAY

// let lista = ["Adriel", "Natalia", "Brian", "Maria"];

// lista.map((item, index) => {
//     console.log(`Passando: ${item} - está na posição: ${index}`)
// })

//Reduce -> O reduce busca reduzir um array
let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    // console.log(`${acumulador} - total até o momento`)
    // console.log(`${numero} - valor atual`)
    // console.log(`${indice} - Posição que está`)
    // console.log(`${original} - Array original`)
    console.log("================================")

    return acumulador += numero;
})

console.log("Total do Reduce : " + total)