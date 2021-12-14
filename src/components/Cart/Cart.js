import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/CartContext'
import CartItem from '../CartItem/CartItem';
import './Cart.scss'

export const Cart = () => {

    const { carrito, vaciarCarrito, totalPrice } = useCartContext();
    return (
        <div className="carrito-back">
            <div className="container carrito">
                <h2>Mi Carrito</h2>
                <hr/>
                {
                    carrito.length 
                    ?   <>
                            { carrito.map(producto => <CartItem {...producto}/>) }
                            <div className="cart-controls">
                                <p>Total de compra ${totalPrice()}</p>
                                <div>
                                    <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
                                    <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
                                </div>
                             </div>
                        </>
                    :   <div className="cart-empty">
                            <p>Su carrito esta vacio</p>
                            <Link to="/" className="btn btn-warning">Seguir comprando</Link>
                        </div>
                }
            </div>
        </div>
    )
}
