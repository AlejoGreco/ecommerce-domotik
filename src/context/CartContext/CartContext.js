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
        const p = carrito.find(producto => producto.id === productId);
        if(p){
            console.log(p.count)
            return p.count;
        }
        return 0;
    }

    const totalCount = () => {
        return carrito.reduce((accu, p) => accu = accu + p.count, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((accu, p) => accu = accu + p.count * p.precio, 0)
    }

    const values = {
        carrito,
        agregarAlCarrito,
        quitarDelCarrito,
        vaciarCarrito,
        isInCart,
        totalCount,
        totalPrice
    }
    return (
        <CartContext.Provider
        value={values}
        >
            {children}
        </CartContext.Provider>
    )
}
