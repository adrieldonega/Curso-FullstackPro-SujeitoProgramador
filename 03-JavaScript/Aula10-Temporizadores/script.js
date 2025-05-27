// setInterval -> Executa de tempos em tempos, infinitamente.

function acao() {
    document.write("Executando....<br/>")
}


//exige 2 parametros (função a ser executada e o tempo em milissegundos)
// () => {} são chamadas funções anonimas ou Arrow Functions

// var timer = setInterval(() => {
//     document.write("Executando!!!!! <br/>")

// }, 2000)

// //Para a execução do setInterval.
// clearInterval(timer);


// setTimeout -> Executa apenas uma vez o que for passado
setTimeout(acao, 3000);