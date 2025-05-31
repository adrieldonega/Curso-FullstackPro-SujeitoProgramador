
/* REQUISIÇÕES HTTP

O consumo de API => é consumir algum serviço externo ou dado externo dentro da nossa aplicação

URL do exemplo: https://sujeitoprogramador.com/rn-api/?api=posts

-> .querySelector:  Seleciona o primeiro elemento HTML que corresponde a um seletor CSS (classes, IDs ou tags)

-> fetch ("DIGITAR A URL DA API") -> O fetch é uma Promise, um Promise é uma Promessa de sucesso ou erro (pode dar certo ou pode dar errado)
   
    .then() - >  é o caso de sucesso, caso tenha sucesso na conexão com a API vai cair dentro do .then.
                O .then recebe uma função anonima (arrow function), onde o primeiro parametro dentro da função é o Response (r) e convertemos a Resposta (response) em JSON com o comando r.json 
                r.json também é uma promise (promessa de dar certo ou errado)
    .catch() -> caso algo de errado, ele captura o erro.
Depois dos testes e verificações se deu certo a conexão, agora podemos utilizar o JSON dentro do ARRAY

.map() -> vai percorrer todo o JSON (post) e vai montar na tela (textos, imagens)

liElement = document.createElement("li"); -> cria uma li no HTML
titleElement = document.createElement("strong") -> cria um Titulo em negrito 
imgElement = document.createElement("img") -> cria uma imagem no HTML
descriptionElement = documento.createElement("a"); -> Cria uma texto para descrição, o "a" não é um link e sim um texto, ele só vira link quando é inserido o href, porem ainda não vamos colocar o href.

*/

let listElement = document.querySelector("#app");

let posts = [];

function nutriApp() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then((r) => r.json())
        .then((json) => {
            posts = json; /*o post que era uma array vazia, agora vai receber o que tiver dentro do JSON */


            posts.map((item) => {
                //console.log(item.titulo) /* vai aparecer no console todos os titulos do json */

                let liElement = document.createElement("li");
                let titleElement = document.createElement("strong");
                let imgElement = document.createElement("img");
                let descriptionElement = document.createElement("a");

                let titleText = document.createTextNode(item.titulo); // absorve o titulo do texto do JSON
                titleElement.appendChild(titleText); //adiciona o titleText ao "titleElement" criado com a tag <strong>
                liElement.appendChild(titleElement); //coloca o titulo dentro da "liElement"

                imgElement.src = item.capa; //adiciona a imagem ao HTML
                liElement.appendChild(imgElement); //adiciona a imagem a "liElement"

                let descriptionText = document.createTextNode(item.subtitulo) //vamos adicionar o texto da descrição dentro da tag <a>
                descriptionElement.appendChild(descriptionText); //agora vamos passar o descriptionElement para a liElement
                liElement.appendChild(descriptionElement);

                //agora vamos colocar todos os itens dentro da ul

                listElement.appendChild(liElement);
            })


        })
        .catch(() => {
            console.log("DEU ALGUM ERRO")
        })
}

nutriApp()