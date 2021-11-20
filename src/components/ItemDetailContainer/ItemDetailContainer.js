import React, { useEffect, useState } from 'react'
import { cargarProductos } from '../../aux/cargarProductos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.scss';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const prodId = 2;

    useEffect(() => {
        setLoading(true);
        cargarProductos()
            .then( productos => { 
                setItem(productos.find(p => p.id === prodId)) 
            })
            .catch( err => { 
                console.log(err)
            })
            .finally(()=> {
                setLoading(false)
            });
    }, []);

    return (
        <article className="detail-container">
            <h2>Info de producto</h2>
            <hr/>
            {
                loading 
                    ?
                        <h3>Cargando...</h3>
                    :
                        <ItemDetail {...item} />
            }
        </article>
    )
}
