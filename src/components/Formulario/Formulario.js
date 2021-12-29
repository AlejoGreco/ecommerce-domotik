import React, {useState} from 'react'
import Swal from 'sweetalert2'
import { validarOrden } from '../../aux/validarOrden'
import { realizarOrden } from '../../firebase/realizarOrden'
import { useCartContext } from '../../context/CartContext/CartContext'
import './Formulario.scss'

export const Formulario = () => {
    
    const {carrito, vaciarCarrito, totalPrice} = useCartContext();
    const [error, setError] = useState(0, '');
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

    const handleSubmit = e => {
        e.preventDefault();

        validarOrden(values)
            .then(() => {
                setError(realizarOrden(values, carrito, vaciarCarrito, totalPrice));
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err[1],
                });
                setError([err[0], err[1]]);
            });
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
                        className={error[0] === 1 ? "invalid" : ""}
                        placeholder="Nombre"
                    >
                    </input>
                    {error[0] === 1 ? <p className="error-msg">El nombre debe tener entre 4 y 20 caracteres</p> : <></>}
                </div>
                <div className="form-item">
                    <label for="apellido" hidden>Apellido</label>
                    <input 
                        type="text" 
                        id="apellido"
                        value={values.apellido} 
                        name="apellido"
                        onChange={handleInputChange}
                        className={error[0] === 2 ? "invalid" : ""}
                        placeholder="Apellido"
                    >
                    </input>
                    {error[0] === 2 ? <p className="error-msg">El apellido debe tener entre 4 y 20 caracteres</p> : <></>}
                </div>
                <div className="form-item">
                    <label for="email" hidden>Email</label>
                    <input type="email"
                        id="email" 
                        value={values.email} 
                        name="email"
                        onChange={handleInputChange}
                        className={error[0] === 3 ? "invalid" : ""}
                        placeholder="Email"
                    >
                    </input>
                    {error[0] === 3 ? <p className="error-msg">Formato de email invalido. Ej: alguien@xxxx.com</p> : <></>}
                </div>
                <div className="form-item">
                    <label for="tel" hidden>Telefono</label>
                    <input 
                        type="text" 
                        id="tel" 
                        value={values.telefono} 
                        name="telefono" 
                        onChange={handleInputChange}
                        className={error[0] === 4 ? "invalid" : ""}
                        placeholder="Telefono"
                    >
                    </input>
                    {error[0] === 4 ? <p className="error-msg">Formato invalido. Ej: 2231112222 / (223)111-2222</p> : <></>}
                </div>
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </article>
    )
}
