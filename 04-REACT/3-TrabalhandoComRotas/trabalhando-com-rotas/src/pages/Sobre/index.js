import { Link } from "react-router-dom";


function Sobre() {
    return (
        <div >
            <h1>Pagina Sobre a Empresa.</h1>
            <span> Adriel Empresa</span> <br /><br />

            <Link to={"/"}>Home</Link><br /> <br />
            <Link to='/contato'>Contato</Link>
        </div>
    );
}

export default Sobre;
