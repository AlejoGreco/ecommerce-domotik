import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { cargarProductos } from '../../aux/cargarProductos';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.scss';

const  ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { cat } = useParams();

    useEffect(() => { 
        setLoading(true);
        cargarProductos()
            .then(productos => {
                if(!cat)
                    setItems(productos);
                else
                    setItems(productos.filter(p => p.category === cat))
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });

    },[cat]);

    return (
        <div className="greeting-container">
            <h2>{greeting}</h2>
            <hr/>
            {
                loading
                ?   <h3>Cargando...</h3>
                :   <ItemList items={items} />
            }
        </div>
    )
}

export default ItemListContainer
