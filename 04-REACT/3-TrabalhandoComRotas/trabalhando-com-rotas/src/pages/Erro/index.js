import { Link } from 'react-router-dom'

function Erro() {
    return (
        <div>
            <h2>Ops parece que essa pagina não existe</h2><br /><br />

            <span>Acesse os links uteis.</span><br />
            <Link to='/'>Home</Link> <br />
            <Link to='/sobre'>Sobre</Link><br />
            <Link to='/contato'>Contato</Link><br />
        </div>
    )
}

export default Erro;