import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = producto => {
        setCarrito([...carrito, producto]);
    }

    const quitarDelCarrito = productId => {
        setCarrito(carrito.filter(producto => producto.id !== productId));
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const isInCart = productId => {
        return carrito.find(producto => producto.id === productId);
    }

    const values = {
        carrito,
        agregarAlCarrito,
        quitarDelCarrito,
        vaciarCarrito,
        isInCart
    }
    return (
        <CartContext.Provider
        value={values}
        >
            {children}
        </CartContext.Provider>
    )
}
