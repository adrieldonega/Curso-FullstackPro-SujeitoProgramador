
// FIND -> buscar alguma coisa

let listagem = [5, 3, "Adriel", 2, "Natalia"]

let busca = listagem.find((item) => {
    //return item === "Brian" // -> retorna Undefined pois o item nao está na array
    return item === "Adriel"

})

console.log("O item encontrado com o FIND foi: " + busca)




// FILTER -> Filtra alguma coisa dentro de um array

let palavras = ["Brian", "Maria Luiza"];

let resultado = palavras.filter((item) => {
    return item.length >= 6;
})

console.log("O item encontrado com o FILTER foi : " + resultado)