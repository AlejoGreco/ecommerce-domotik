import React, {useState} from 'react'
import {collection, writeBatch, query, where, documentId, Timestamp, getDocs, addDoc} from 'firebase/firestore/lite'
import { db } from '../../firebase/config'
import Swal from 'sweetalert2'
import { validarOrden } from '../../aux/validarOrden'
import { useCartContext } from '../../context/CartContext/CartContext'
import './Formulario.scss'

export const Formulario = () => {
    const {carrito, vaciarCarrito, totalPrice} = useCartContext();
    const [values, setValues] = useState({
        nombre:"",
        apellido:"",
        email:"",
        telefono:""
    })

    const handleInputChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        
        if(validarOrden(values)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              });
        }

        const orden = {
            ...values,
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
                            title: 'Genial!',
                            text: `Su compra fue confirmada con el nro ${resp.id}`
                        }
                    );
                    vaciarCarrito();
                })
        }
        else {
            Swal.fire(
                {
                    icon: 'error',
                    title: 'Oops...',
                    text: `No hay stock de los sig productos ${outOfStock.map(p => p.nombre).join(', ')}`
                }
            );
        }
    }

    return (
        <article className="form-container">
            <h2>Complete sus datos</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label for="nombre" hidden>Nombre</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        value={values.nombre} 
                        name="nombre"
                        onChange={handleInputChange}
                        placeholder="Nombre"
                    >
                    </input>
                </div>
                <div className="form-item">
                    <label for="apellido" hidden>Apellido</label>
                    <input 
                        type="text" 
                        id="apellido"
                        value={values.apellido} 
                        name="apellido"
                        onChange={handleInputChange}
                        placeholder="Apellido"
                    >
                    </input>
                </div>
                <div className="form-item">
                    <label for="email" hidden>Email</label>
                    <input type="email"
                        id="email" 
                        value={values.email} 
                        name="email"
                        onChange={handleInputChange}
                        placeholder="Email"
                    >
                    </input>
                </div>
                <div className="form-item">
                    <label for="tel" hidden>Telefono</label>
                    <input 
                        type="number" 
                        id="tel" 
                        value={values.telefono} 
                        name="telefono" 
                        onChange={handleInputChange}
                        placeholder="Telefono"
                    >
                    </input>
                </div>
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </article>
    )
}
