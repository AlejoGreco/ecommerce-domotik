import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/CartContext'
import CartItem from '../CartItem/CartItem';

export const Cart = () => {

    const { carrito, vaciarCarrito } = useCartContext();
    return (
        <div className="container my-3">
            <h2>Mi Carrito</h2>
            <hr/>
            {
                carrito.length 
                ?   <>
                        { carrito.map(producto => <CartItem {...producto}/>) }
                        <hr />
                        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </>
                :   <>
                        <h3>Su carrito esta vacio</h3>
                        <Link to="/" className="btn btn-warning">Seguir comprando</Link>
                    </>
            }
        </div>
    )
}
