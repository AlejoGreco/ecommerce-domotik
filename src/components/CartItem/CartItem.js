import React from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'

const CartItem = ({id, nombre, precio, img, count}) => {
    
    const { quitarDelCarrito } = useCartContext();

    return (
        <div>
            <img src={img} alt={nombre} />
            <h4>{nombre}</h4>
            <p>Precio: {precio}</p>
            <p>Cantidad: {count}</p>
            <button onClick={() => quitarDelCarrito(id)}>Quitar</button>
        </div>
    )
}

export default CartItem
