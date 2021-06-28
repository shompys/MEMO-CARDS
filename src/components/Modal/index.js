import React, { useEffect, useState } from 'react';
import './modal.css';

const Modal = ({isWinner}) => {

    const [state, setState] = useState(null);

    useEffect(() => {
        console.log('hola')
        if(isWinner)return setState(true);
        setState(false);
    },[isWinner, state])

    return (
        <div className="modal-content">
            <div className="modal-content__cartel">

                <h1 className="modal-content__h1" >
                    {
                        state ? 'Ganaste :) !!' : 'Perdiste :('
                    }
                </h1>

            </div>
        </div>
    )
}

export default Modal;
