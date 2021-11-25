import * as React from 'react';
import './NavBar.scss';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    
    return (
        <nav className="my-nav">
            <h1><Link className="link" to="/">Domotik - Plataforma</Link></h1>
            <ul className="nav-list">
                <li><Link className="link" to="/category/accesos">Accesos</Link></li>
                <li><Link className="link" to="/category/iluminacion">Iluminación</Link></li>
                <li><Link className="link" to="/category/climatizacion">Climatización</Link></li>
                <li><Link className="link" to="/category/piscinas">Piscinas</Link></li>
            </ul>
            <Link className="link" to="/cart"><CartWidget /></Link>   
        </nav>
    );
} 