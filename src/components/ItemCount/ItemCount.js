import React from 'react';
import {Button} from 'react-bootstrap';
import './ItemCount.scss';

export const ItemCount = ({stock, count, setCount, onAdd, cartCount}) => {

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

    return (
        <div className="item-count-container">
            <div className="cantidad-controls-container">
                <div className="item-count-controlers">
                    <span>Cantidad: {count}</span>
                    {
                        cartCount && <span>Items en carrito: {cartCount}</span>
                    }
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
        </div>
    );
}
