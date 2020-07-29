import React from 'react';
import Logo from '../../assets/img/logo-azul.png';
import './menu.css';
import Button from "../button";
// import ButtonLink from "../components/buttonLink";

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="RizziFlix" className="Logo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Teste
            </Button>
        </nav>       
    );
}

// Necessário exportar para importar em outros lugares
export default Menu;