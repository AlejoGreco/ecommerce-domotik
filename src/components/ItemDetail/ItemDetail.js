import React from 'react';
import { Button } from 'react-bootstrap';
import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router';

export const ItemDetail = ({id, nombre, stock, precio, desc, img}) => {
    
    const navegador = useNavigate();
    const handleHome = () => { navegador("/") }
    const handleVolver = () => { navegador(-1) }
    
    return (
        <div className="detail-item">
            <div className="img-detail-container">
                <img src={img} alt={nombre} />
            </div>
            <div className="detail-subcontainer">
                <div className="nav-buttons">
                    <Button variant="warning" onClick={ handleVolver }>Atras</Button>
                    <Button variant="warning" onClick={ handleHome }>Home</Button>
                </div>
                <div className="detail-text">
                    <h3>{nombre}</h3>
                    <p>{desc}</p>
                    <p>Precio: $ {precio}</p>
                </div>
                <div className="detail-buttons">
                    <ItemCount stock={stock} />
                    <Button variant="warning" className="principal-buttons">Comprar</Button>
                    <Button variant="outline-warning" className="principal-buttons">Agregar al carrito</Button>
                </div>
            </div>
        </div>
    )
}
