import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/CartContext';


export const ItemDetail = ({id, nombre, stock, precio, desc, img}) => {
    const navegador = useNavigate();
    const [count, setCount] = useState(1);
    const { agregarAlCarrito, isInCart } = useCartContext();

    const handleHome = () => { navegador("/") }

    const handleVolver = () => { navegador(-1) }

    const handleAgregar = () => {
        setCount(1);
        agregarAlCarrito({
            id,
            nombre,
            precio,
            img,
            count
        })
    }

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
                {
                    isInCart(id) 
                    ?   <Link to="/cart" className="btn btn-warning principal-buttons">Finalizar compra</Link>
                    :   <ItemCount stock={stock} onAdd={ handleAgregar } count={count} setCount={ setCount }/>
                }
            </div>
        </div>
    )
}
