//Spread Operator

// let primeiros = [1, 2, 3];

// let numeros = [...primeiros, 4, 5, 10];

// console.log(numeros)

// let dadosPessoais = {
//     nome: "Natalia",
//     idade: 36,
//     sexo: "F",
//     cidade: "Santo André/SP"
// }

// let dadosFuncionario = {
//     // ...dadosPessoais,        // -> Adiciona os dados do objeto dadosPessoais
//     cargo: "RH",
//     status: "ATIVO"
// }

// let ganhos = {
//     // ...dadosPessoais,
//     // ...dadosFuncionario,
//     diasTrabalhados: "seg a sex",
//     salario: 4500
// }

// let consulta = {
//     ...dadosPessoais,
//     ...dadosFuncionario,
//     ...ganhos
// }

// console.log(consulta)

function novoUsuario(info) {
    let dados = {
        ...info,
        status: "ACTIVE",
        inicio: "20/03/2025",
        codigo: "123123"
    }
    console.log(dados);
}

novoUsuario({ nome: "Jose", sobrenome: "Silva", cargo: "DEV" })