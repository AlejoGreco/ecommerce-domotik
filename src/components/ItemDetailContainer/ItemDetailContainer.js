import { doc, getDoc, collection } from '@firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { db } from '../../firebase/config';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loader } from '../Loader/Loader';
import './ItemDetailContainer.scss';


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const collectionRef = collection(db, 'productos');
        const detailRef = doc(collectionRef, id);
        getDoc(detailRef)
            .then(doc => {
                setItem({id:doc.id, ...doc.data()})
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
                    ? <Loader />
                    : <ItemDetail {...item} />
            }
        </article>
    )
}
