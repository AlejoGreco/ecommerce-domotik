import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import './ItemCount.scss';

export const ItemCount = ({stock}) => {
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

    return (
        <div className="item-count-container">
            <div className="item-count-controlers">
                <span>Cantidad: {count}</span>
                <div>
                    <Button variant="outline-warning" onClick={restCountHandler}>-</Button>
                    <Button variant="warning" onClick={addCountHandler}>+</Button>
                </div>
            </div>
        </div>
    );
}
