import React from 'react'
import {FaClipboardList} from 'react-icons/fa'
import { useCartContext } from '../../context/CartContext/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {
    const {totalCount, carrito} = useCartContext();
    return (
        <div className="widget-container">
            {
                carrito.length 
                ?   <p className="widget-number">{totalCount()}</p> 
                :   <></>
            }
            <FaClipboardList size={20}/>
        </div>
    )
}
