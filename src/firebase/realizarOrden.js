import {collection, writeBatch, query, where, documentId, Timestamp, getDocs, addDoc} from 'firebase/firestore/lite'
import { db } from './config'
import Swal from 'sweetalert2'

export const realizarOrden = async (values, carrito, vaciarCarrito, totalPrice) => {
    
    const orden = {
        buyer : values,
        items : carrito, 
        total : totalPrice(),
        date : Timestamp.fromDate(new Date()) 
    }


    const productRef = collection(db, 'productos');
    const ordersRef = collection(db, 'orders');
    const batch = writeBatch(db);
    const outOfStock = [];

    const q = query(productRef, where(documentId(), 'in', carrito.map(p => p.id)));
    const productos = await getDocs(q);

    productos.docs.forEach(p => {
        const itemUpdate = carrito.find(prodCart => prodCart.id === p.id);
        if(p.data().stock >= itemUpdate.count){
            batch.update(p.ref, {stock : p.data().stock - itemUpdate.count})
        }
        else {
            outOfStock.push(itemUpdate);
        }
    });

    if(outOfStock.length === 0){
        addDoc(ordersRef, orden)
            .then(resp => {
                batch.commit();
                Swal.fire(
                    {
                        icon: 'success',
                        title: 'Compra confirmada!',
                        text: `Numero de su orden de compra: ${resp.id}`
                    }
                );
                vaciarCarrito();
            })
    }
    else {
        Swal.fire(
            {
                icon: 'error',
                title: 'Orden cancelada. No hay stock de los siguientes productos',
                text: `${outOfStock.map(p => p.nombre).join(', ')}`
            }
        );
        return[0, ''];
    }
}