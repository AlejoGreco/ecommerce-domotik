import React, { useEffect, useState } from 'react'
import { cargarProductos } from '../../aux/cargarProductos';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.scss';

const  ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        setLoading(true);
        cargarProductos()
            .then(productos => {
                setItems(productos);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });

    },[]);

    return (
        <div className="greeting-container">
            <h2>{greeting}</h2>
            <hr/>
            {
                loading
                    ?
                        <h3>Cargando...</h3>
                    :
                        <ItemList items={items} />
            }
        </div>
    )
}

export default ItemListContainer
