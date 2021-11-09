import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
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
                <span onClick={restCountHandler}>-</span>
                <span>{count}</span>
                <span onClick={addCountHandler}>+</span>
            </div>
            <Button variant="outline-warning" className="button-custom">Agregar</Button>
        </div>
    );
}
