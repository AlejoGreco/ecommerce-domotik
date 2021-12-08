import { collection, getDocs, query, where } from '@firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { db } from '../../firebase/config';
import { ItemList } from '../ItemList/ItemList';
import { Loader } from '../Loader/Loader';
import './ItemListContainer.scss';


const  ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { cat } = useParams();

    useEffect(() => { 
        setLoading(true);
        const collectionRef = collection(db, 'productos');
        let q;
        if(cat){
            q = query(collectionRef, where('category', '==', cat));
        }
        else {
            q = collectionRef;
        } 
        getDocs(q)
            .then(snapshot => {
                setItems(snapshot.docs.map( doc => ( {id:doc.id, ...doc.data() })) );
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
                ?   <Loader />
                :   <ItemList items={items} />
            }
        </div>
    )
}

export default ItemListContainer
