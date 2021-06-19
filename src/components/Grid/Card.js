import React, { useState, useEffect } from 'react';

const Card = ({id, name, content , handleClick, resetCard,reset, setReset}) => {

    const [isCardFaceDown, setIsCardFaceDown] = useState(true);
    
    const handle = () => {

        setIsCardFaceDown(false);

        handleClick({id, name, content}, isCardFaceDown);

    }

    useEffect(() => {
        
        setTimeout(() => {
            if(resetCard.includes(id)) return setIsCardFaceDown(true);
        },1000)
        
    }, [resetCard, id])

    useEffect(() => {
        
        if(reset) {
             setIsCardFaceDown(true)
             setReset(false)
        }
        

    }, [reset, setReset])
    
    return(
        !isCardFaceDown ?
        
            <div className="card" onClick={handle}>
                
                <strong>
                    { name }
                </strong>
                <p>
                    {content}
                </p>
            </div>

        :

            <div className="card card-2" onClick={handle}>
                <strong>
                    xxx
                </strong>
                <p>
                    x
                </p>
            </div>
    )
}

export default Card;