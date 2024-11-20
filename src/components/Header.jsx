import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" style={{ height: "100px" }} />
            <h1>Ajuda sem fronteiras</h1>
            <div className='headerLinkContainer'>
                <NavLink className='headerLink' to='/'>Inicio</NavLink>
                <NavLink className='headerLink' to='/locais'>Lugares Necessitados</NavLink>
                <NavLink className='headerLink' to='/sobre'>Quem somos</NavLink>
                <NavLink className='headerLink' to='/cadastro'>Cadastro</NavLink>
            </div>
        </div>
    )
}

export default Header