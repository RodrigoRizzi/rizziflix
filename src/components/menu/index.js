import React from 'react';
import Logo from '../../assets/img/logo-azul.png';
import './menu.css';
import Button from "../button";
// import ButtonLink from "../components/buttonLink";
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="RizziFlix" className="Logo"></img>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>       
    );
}

// Necessário exportar para importar em outros lugares
export default Menu;