import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.scss';

export const Item = ({id, nombre, precio, img}) => {
    return (
        <div className="my-card-item">
            <div className="img-container">
                <img src={img} alt={nombre} />
            </div>
            <div className="my-card-text">
                <h3>{nombre}</h3>
                <p>Precio: $ {precio}</p>
                <Link to={`/item/${id}`}><Button variant="outline-warning" className="button-edit">Ver mas</Button></Link>
            </div>
        </div>
    )
}
