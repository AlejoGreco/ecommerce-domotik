import * as React from 'react';
import {useState} from 'react';
import './NavBar.scss';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { GoGrabber } from "react-icons/go";

export const NavBar = () => {
    const [visible, setVisible] = useState(false);
   
    return (
        <nav className="my-nav">
            <GoGrabber size={25} className="hamb-icon" onClick={() => setVisible(!visible)}/>
            <h1><Link className="link" to="/">Domotik</Link></h1>
            <ul className={visible ? "nav-list show" : "nav-list"}>
                <li><Link className="link" to="/category/accesos">Accesos</Link></li>
                <li><Link className="link" to="/category/iluminacion">Iluminación</Link></li>
                <li><Link className="link" to="/category/climatizacion">Climatización</Link></li>
                <li><Link className="link" to="/category/piscinas">Piscinas</Link></li>
            </ul>
            <Link className="link" to="/cart"><CartWidget /></Link>   
        </nav>
    );
} 