
// Template Strings -> Serve para concatenar variaveis e texto inline, sem a necessidade da concatenação com o (+).
//Usaremos ${nome da variavel}

let nome = "Adriel";
let sobrenome = "Donegá";
let idade = 37;

let mensagemSemTemplateString = "Meu nome é: " + nome + " " + sobrenome + " " + "e eu tenho " + idade + " anos de idade.Essa mensagem foi escrita Sem Template String"

console.log(mensagemSemTemplateString)

let mensagemComTemplateString = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade. Essa mensagem foi escrita Com Template String`

console.log(mensagemComTemplateString)