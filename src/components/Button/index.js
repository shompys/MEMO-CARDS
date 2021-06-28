import React from 'react';
import './button.css';
const Button = ({handleReset}) => {
    return (
        <>
            <button onClick={handleReset} className="button-reset" > NUEVA PARTIDA </button>
        </>
    )
}
export default Button;