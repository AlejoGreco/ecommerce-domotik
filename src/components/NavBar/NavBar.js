import * as React from 'react';
import './NavBar.scss';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    
    return (
        <>
            <nav className="my-nav">
                <h1>Domotik - Plataforma</h1>
                <ul className="nav-list">
                    <li>Accesos</li>
                    <li>Iluminación</li>
                    <li>Climatización</li>
                    <li>Piscinas</li>
                </ul>
                <CartWidget />
            </nav>
        </>
    );
} 