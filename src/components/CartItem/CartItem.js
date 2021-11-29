import React from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import './CartItem.scss'
import { FaTrashAlt } from 'react-icons/fa';

const CartItem = ({id, nombre, precio, img, count}) => {
    
    const { quitarDelCarrito } = useCartContext();

    return (
        <div className="cart-item">
            <img src={img} alt={nombre} />
            <div className="cart-info">
                <h4>{nombre}</h4>
                <p>${precio}</p>
            </div>
            <div className="cart-item-control">
                <p>Items {count}</p>
                <button className="btn btn-danger" onClick={() => quitarDelCarrito(id)}><FaTrashAlt /></button>
            </div>
        </div>
    )
}

export default CartItem
