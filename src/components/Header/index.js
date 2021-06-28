import React from 'react';
import Button from '../Button';
import './header.css';

const Header = ({lives, existingPairs, correctCounter, handleReset }) => {
    return(
        <div className="header-content">
            <div>
                <span className="header-content__span">Lives: </span>
                <span className="header-content__span">{ lives }</span>
            </div>
            <div>
                <Button handleReset= {handleReset} />
            </div>
            <div>
                <span className="header-content__span" >Aciertos: </span>
                <span className="header-content__span">{ correctCounter }</span>
                <span className="header-content__span">/</span>
                <span className="header-content__span">{ existingPairs }</span>
            </div>
        </div>
    )
}
export default Header;