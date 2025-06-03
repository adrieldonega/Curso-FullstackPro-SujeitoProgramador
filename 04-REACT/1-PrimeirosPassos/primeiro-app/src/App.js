import { useState, useEffect } from 'react' //importa o hook




function App() {

    const [input, setInput] = useState('');    //construindo um useState pra ficar atrelado ao input
    const [tarefas, setTarefas] = useState([
        'Pagar a conta de Luz',
        'Estudar ReactJS'
    ]); //useState Array


    //Quando a aplicação abrir quero chamar a função
    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefa');

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }
    }, []);

    //1º uso - Se a array está vazia, toda vez que a aplicação for montada na tela ele vai chamar o useEffect.
    //2º se eu colocar alguma coisa dentro da array, toda vez que a array sofrer alteraçao ele vai chamar o useEffect.

    useEffect(() => {
        localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    }, [tarefas]);

    function handleRegister(e) {
        e.preventDefault();

        setTarefas([...tarefas, input]);
        setInput('');


    }

    return (
        <div>
            <h1>CADASTRANDO USUARIO</h1>

            <form onSubmit={handleRegister}>
                <label>Nome da tarefa:
                </label> <br />
                <input
                    placeholder='Digite uma tarefa: '
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                /><br />



                <button type='submit'>Registrar</button>

            </form>

            <br /><br />

            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}

            </ul>

        </div>
    );
}

export default App;

