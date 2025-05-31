

/* MÉTODO includes() -> Verifica se uma string contém um trecho específico (case-sensitive)

            const frase = "Aprender JavaScript é incrível!";

            console.log(frase.includes("JavaScript")); // true
            console.log(frase.includes("typescript")); // false (case-sensitive!)
            console.log(frase.includes("é")); // true

Use quando:
    * Validar se um texto contém uma palavra-chave
    * Substituir verificações manuais com indexOf() !== -1
*/

let nomes = ["Adriel", "Natalia", "Brian", "Maria"];

//console.log(nomes.includes("Lucas"));

if (nomes.includes("Adriel")) {
    console.log("Está na lista!")
} else {
    console.log("Não está na lista")
}


/*
// MÉTODO startWith() -> Checa se a string começa com determinado valor

            const url = "https://www.linkedin.com";

            console.log(url.startsWith("https")); // true
            console.log(url.startsWith("www", 8)); // true (busca a partir do índice 8)

Use quando:
    * Validar protocolos (HTTP/HTTPS)
    * Filtrar listas por prefixos
*/

let nome = "Adriel"

console.log(nome.startsWith("Adr"))//TRUE
console.log(nome.startsWith("N"))//false


/*
// MÉTODO endsWith() -> Verifica se a string termina com o valor especificado

            const arquivo = "foto_perfil.png";

            console.log(arquivo.endsWith(".png")); // true
            console.log(arquivo.endsWith("perfil")); // false
            console.log(arquivo.endsWith("foto", 10)); // true (considera só os 10 primeiros chars)
    Use quando:
    * Checar extensões de arquivos
    * Validar formatos de dados (CPF, CNPJ, etc.)

*/

let nome2 = "Natalia"

console.log(nome2.endsWith("ia"))//TRUE
console.log(nome2.endsWith("n"))//false




