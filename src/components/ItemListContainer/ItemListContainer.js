import React from 'react'
import './ItemListContainer.scss'
import { ItemCount } from "../ItemCount/ItemCount";

const  ItemListContainer = ({greeting}) => {
    return (
        <div className="greeting-container">
            <h2>{greeting}</h2>
            <hr/>
            <ItemCount stock={10} />
        </div>
    )
}

export default ItemListContainer
