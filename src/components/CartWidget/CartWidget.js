import React from 'react'
import {FaClipboardList} from 'react-icons/fa'
import { useCartContext } from '../../context/CartContext/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {
    const {totalCount, carrito} = useCartContext();
    return (
        <div className={carrito.length > 0 ? "widget-container show" : "widget-container hide"}>
            <p className="widget-number">{totalCount()}</p> 
            <FaClipboardList size={20}/>
        </div>
    )
}
