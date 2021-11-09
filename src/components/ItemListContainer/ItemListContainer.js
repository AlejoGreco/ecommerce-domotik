import React from 'react'
import './ItemListContainer.scss'

const  ItemListContainer = ({greeting}) => {
    return (
        <div className="greeting-container">
            <h2>{greeting}</h2>
            <hr/>
        </div>
    )
}

export default ItemListContainer
