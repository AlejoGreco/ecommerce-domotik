import { productos } from "../data/productos";

export const cargarProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })    
}