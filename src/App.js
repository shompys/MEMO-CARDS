import React, { useState, useEffect, useCallback } from 'react';
import { useFetch } from './hooks/useFetch';
import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {
  const state = useFetch(`https://rickandmortyapi.com/api/character`);
  
  const [cards, setCards] = useState([]);
  const [lives, setLives] = useState(5);
  const [existingPairs, setExistingPairs] = useState(0);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [resetCard, setResetCard] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [isWinner, setIsWinner] = useState(null);

  const [reset, setReset] = useState(false);

  const handleReset = () => {

    setReset(true);
    setLives(5);
    setCorrectCounter(0);
    setResetCard([]);
    setCurrentCard(null);
    setIsWinner(null);
    mixCardsAddPairs();

  }

  const fail = (currentCard, id) => setResetCard([currentCard, id]);

  const gameOver = () => {

    if(isWinner === null) return
    
  }
  
  const handleClick=(card, isCardFaceDown) => {
    gameOver();
    setCurrentCard(card);
    //con isCardFaceDown evita que entre al ciclo cuando se toca la misma carta!!!
    if(!currentCard || !isCardFaceDown) return;

    if(currentCard.id === card.id){

      setCorrectCounter( correctCounter + 1 );

      setCurrentCard(null);

      return
    }

    if(lives > 0){

      fail(currentCard.id, card.id);

      setLives(lives - 1);

      setCurrentCard(null);

      return
    }
    setIsWinner(false);
  }

  useEffect(() => {
    
    if(correctCounter === existingPairs && correctCounter !== 0) return setIsWinner(true)

  }, [correctCounter, existingPairs])

  const mixCardsAddPairs = useCallback(() => {

    setExistingPairs(state.data?.length);
    
    if (state.data) return setCards([...state.data, ...state.data].sort(() => Math.random() > .5 ? 1 : -1));
    
  },[state])

  useEffect(() => {
    
    mixCardsAddPairs();

  }, [state, mixCardsAddPairs])

  if(state.loading)return <h1>Cargando</h1>
    
  return (
    <div className="App" style={{display: 'grid'}}>

      <Header lives={lives} existingPairs={existingPairs} correctCounter={correctCounter}/>

      <Grid cards={cards} handleClick={handleClick} resetCard={resetCard} reset={reset} setReset={setReset}/>

      {
        isWinner !== null ? isWinner ? <h1>GANASTE !!!!!</h1> : <h1>Perdiste !!!!</h1> : ''
      }

      <button onClick={handleReset} 
          style={{marginTop: '1rem', justifySelf: 'center', width: '12rem', height: '2rem'}}>
          EMPEZAR DE NUEVO
      </button>

    </div> 
  );
}

export default App;
