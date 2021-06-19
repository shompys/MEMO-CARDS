import React from 'react';
import Card from './Card';
import './index.css';

const Grid = ({cards, handleClick, resetCard, reset, setReset}) => {

    return(
        <div className="grid">
            {
                cards?.map((values,k) => <Card key={k} { ...values}
                handleClick={handleClick}
                resetCard={resetCard}
                reset={reset}
                setReset={setReset}
                />)
            }
        </div>
    )
}
export default Grid;