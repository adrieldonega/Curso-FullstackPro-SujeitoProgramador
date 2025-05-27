//new Date() -> aponta para o dia e hora atual

var data = new Date()

console.log(data)


// .getHours() -> Mostra apenas as horas
data.getHours();


// .getMinutes() -> Mostra apenas os minutos
data.getMinutes();

// .getSeconds() -> Mostra apenas os segundos
data.getSeconds()

// .getMilliseconds() -> Mostra os milissegundos
data.getMilliseconds


// Criando uma data especifica.
var dataNova = new Date("March 10, 2018");
console.log(dataNova)

// Convertendo uma data em Milissegundos
Date.parse(dataNova)

//Mostra apenas o dia da nova data.
dataNova.getDate();

//Mostra apenas o mes da nova data
dataNova.getMonth();

//Mostra o dia da semana
dataNova.getDay();

//Mostra o ano
dataNova.getFullYear();

//Formatando a data
dataNova.getDate() + "/" + (dataNova.getMonth() + 1) + "/" + dataNova.getFullYear();

//Somando as datas

//Incrementando Dias
dataNova.setDate(dataNova.getDate() + 5);

console.log(dataNova)

//Incrementando Horas
dataNova.setHours(dataNova.getHours() + 10)
console.log(dataNova)

//Informando o dia da semana por extenso (segunda, terca...)
var dias = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sabado'
];

console.log(dias)

console.log(dias[dataNova.getDay()])