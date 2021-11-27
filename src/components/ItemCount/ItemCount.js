import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ItemCount.scss';

export const ItemCount = ({stock, inCart, setInCart}) => {
    const [count, setCount] = useState(1);

    const addCountHandler = () => {
        if(count < stock){
            setCount(count + 1);
        } 
    }

    const restCountHandler = () => {
        if(count > 1){
            setCount(count - 1);
        }      
    }

    const onAdd = () => {
        setInCart(true);
    }


    return (
        <div className="item-count-container">
            {
                !inCart
                ?   <>
                        <div className="cantidad-controls-container">
                            <div className="item-count-controlers">
                                <span>Cantidad: {count}</span>
                                <div>
                                    <Button variant="outline-warning" onClick={restCountHandler}>-</Button>
                                    <Button variant="warning" onClick={addCountHandler}>+</Button>
                                </div>
                            </div>
                        </div>
                        <Button 
                            variant="warning" 
                            className="principal-buttons"
                            onClick={onAdd}
                        >
                            Agregar al carrito
                        </Button>
                    </>  
                :   <Link to="/cart" className="link">
                        <Button 
                            variant="warning" 
                            className="principal-buttons"
                        >
                            Finalizar compra
                        </Button>
                    </Link>    
            }   
        </div>
    );
}
