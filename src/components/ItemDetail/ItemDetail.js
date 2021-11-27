import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router';

export const ItemDetail = ({id, nombre, stock, precio, desc, img}) => {
    
    const navegador = useNavigate();
    const handleHome = () => { navegador("/") }
    const handleVolver = () => { navegador(-1) }
    const [inCart, setInCart] = useState(false);
    
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
                <ItemCount stock={stock} inCart={inCart} setInCart={setInCart}/>
            </div>
        </div>
    )
}
