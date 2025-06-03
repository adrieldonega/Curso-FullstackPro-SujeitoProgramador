import { Link } from 'react-router-dom'


function Home() {
    return (
        <div >
            <h1>Bem vindo a pagina Home</h1>
            <span> Home da Empresa</span><br /> <br />

            <Link to='/sobre'>Sobre</Link> <br /> <br />
            <Link to='/contato'>Contato</Link>

            <hr />
            <Link to="/produto/12345">Acessar produto 12345</Link>

        </div>
    );
}

export default Home;
