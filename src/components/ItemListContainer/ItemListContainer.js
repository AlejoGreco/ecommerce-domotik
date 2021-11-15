import React, { useEffect, useState } from 'react'
import { cargarProductos } from '../../aux/cargarProductos';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.scss';

const  ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);

    useEffect(() => { 
        cargarProductos()
            .then(productos => {
                setItems(productos);
            })
            .catch(err => {
                console.log(err);
            });

    },[]);

    return (
        <div className="greeting-container">
            <h2>{greeting}</h2>
            <hr/>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer
