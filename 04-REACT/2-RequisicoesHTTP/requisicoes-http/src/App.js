
import React, { useEffect, useState } from "react";
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts


//CARREGA AS INFORMAÇÕES DA API QUANDO O PROJETO FOR ABERTO { useEffect, useState }.


function App() {
    const [nutri, setNutri] = useState([]); //useState como array vazia.
    useEffect(() => {

        function loadApi() {
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    console.log(json);
                    setNutri(json);
                })
        }

        loadApi();
    }, [])

    return (
        <div className="container">
            <header>
                <strong>React Nutri</strong>
            </header>

            {nutri.map((item) => {
                return (
                    <article key={item.id} className="post">
                        <strong className="titulo">{item.titulo}</strong>

                        <img src={item.capa} alt="{item.titulo" className="capa" />

                        <p className="subtitulo">
                            {item.subtitulo}
                        </p>

                        <a className="botao">
                            Acessar
                        </a>

                    </article>
                )
            })}

        </div>
    );
}

export default App;
