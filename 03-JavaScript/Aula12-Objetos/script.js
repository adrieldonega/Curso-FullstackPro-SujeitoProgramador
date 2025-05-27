// Objetos

let pessoa = {
    nome: "Adriel",
    idade: 37,
    altura: 1.76,
    cargo: "Programador Fullstack"
}

console.log(pessoa)

//Acessando o Nome de Pessoa
pessoa.nome;

//Acessando o Cargo de Pessoa
pessoa.cargo;

let carro = {
    nome: "Golf 1.6",
    cor: "Branco",
    potencia: "140cv"
};

console.log(carro)

//Acessando a potencia do carro
carro.potencia;

//Acessando o nome do carro
carro.nome;

// Lista de Objetos

let usuarios = [
    {nome: "Adriel", cargo: "Programador", status: "ATIVO"},
    {nome: "Natalia", cargo: "Analista de RH", status: "ATIVO"},
    {nome: "Brian", cargo: "Estagiario", status: "Inativo"}
]

console.log(usuarios)

//Acessando o cargo de um usuario da lista encadeada

console.log(usuarios[1].nome) //Essa pesquisa irá retornar o nome do usuario: Natalia.
console.log(usuarios[1].cargo)
//Essa pesquisa irá retornar Analista de RH do usuario Natalia.