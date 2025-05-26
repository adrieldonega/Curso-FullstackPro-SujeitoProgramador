var nome = prompt("Qual seu nome ?");

var sobrenome = prompt("Qual seu sobrenome?");

console.log("Olá, " + nome + " " + sobrenome);

// prompt
// * Pede para o usuario digitar algo


// ESCREVENDO NO DOCUMENTO HTML COM JAVASCRIPT
// document.write("<h1>Bem vindo ao projeto</h1>");

// ESCREVENDO BEM VINDO (NOME DO USUARIO)
document.write("<h1>Bem vindo " + nome + " " + sobrenome + " </h1> ")

// Inserindo uma imagem no HTML com o Javascript
document.write("<img src='./img/foto-pc.png' alt='Foto do Programador' />")