import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { cargarProductos } from '../../aux/cargarProductos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.scss';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        cargarProductos()
            .then( productos => { 
                setItem(productos.find(p => p.id === parseInt(id))) 
            })
            .catch( err => { 
                console.log(err)
            })
            .finally(()=> {
                setLoading(false)
            });
    }, [id]);

    return (
        <article className="detail-container">
            {
                loading 
                    ? <h3>Cargando...</h3>
                    : <ItemDetail {...item} />
            }
        </article>
    )
}
