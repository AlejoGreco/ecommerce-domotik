import React from 'react'

export const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className="my-card-item">
            <div className="img-container">
                <img src={img} alt={nombre} />
            </div>
            <div className="my-card-text">
                <h3>{nombre}</h3>
                <p>Precio: $ {precio}</p>
            </div>
        </div>
    )
}
