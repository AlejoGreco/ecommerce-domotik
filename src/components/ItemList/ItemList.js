import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.scss'

export const ItemList = ({items}) => {
    return (
        <section className="list-container">
            {
                items.map( producto => {
                    return <Item key={producto.id} {...producto} />
                })
            }
        </section>
    )
}

