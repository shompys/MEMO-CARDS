import React from 'react';

const Header = ({lives, existingPairs, correctCounter }) => {
    return(
        <div className="header" style={{display: 'flex', justifyContent: 'space-around', alignItems:'center', height: '50px', background: '#60B5EE'}}>
            <div>
                <span>Lives: </span>
                <span>{ lives }</span>
            </div>
            <div>
                <span >Aciertos: </span>
                <span>{ correctCounter }</span>
                <span>/</span>
                <span>{ existingPairs }</span>
            </div>
        </div>
    )
}
export default Header;