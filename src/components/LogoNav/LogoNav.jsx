import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-horizontal.svg'
import './LogoNav.css';

function Logo() {

    return (
        <div className='logo-container'>
            <Link to="/">
                <img src={logo} alt='logo de canopilogger' />
            </Link>
        </div>
    )
}

export default Logo
