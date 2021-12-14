import React from 'react'
import { Navigate } from 'react-router';
import { useCartContext } from '../../context/CartContext/CartContext'
import { Formulario } from '../Formulario/Formulario';

export const CheckOut = () => {
    const { carrito } = useCartContext();
    return (
        <>
            {
                carrito.length === 0
                ?   <Navigate to="/" />
                :   
                    <Formulario />    
            }
        </>
    )
}
