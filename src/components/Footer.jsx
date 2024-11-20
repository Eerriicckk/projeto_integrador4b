import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerLinkContainer'>
                <NavLink className='headerLink' to='/sobre'>Quem somos</NavLink>
                <NavLink className='headerLink' to='/sobre'>Ajuda</NavLink>
                <NavLink className='headerLink' to='/sobre'>Contato</NavLink>
                <span>Desenvolvido por.</span>
            </div>
            <img src={logo} alt=""
                style={{
                    width: "100px",
                    filter: "grayscale(100%)",
                    alignSelf: "end",
                    display:'flex'
                }}
            />
        </div>
    )
}

export default Footer