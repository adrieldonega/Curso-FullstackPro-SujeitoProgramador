
//Objetos

let pessoa = {
    nome: "Adriel",
    sobrenome: "Donegá",
    empresa: "Sujeito Programador",
    cargo: "Programador Fullstack"
};

// console.log(pessoa.nome);
// console.log(pessoa.cargo);



// const { nome: nomePessoa, cargo, empresa, sobrenome } = pessoa;

// console.log(nomePessoa);
// console.log(sobrenome);


// console.log(cargo);
// console.log(empresa);

//==================================================

//DESCONSTRUIR UM ARRAY

let nomes = ["Adriel", "Natalia", "Brian", "Maria"];

// let { 0: Adriel, 2: Brian } = nomes;

// console.log(Adriel)
// console.log(Brian)


let [primeiroNome, segundoNome] = nomes;

console.log(primeiroNome)
console.log(segundoNome)