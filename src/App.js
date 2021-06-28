import React, { useState, useEffect, useCallback } from 'react';
import { useFetch } from './hooks/useFetch';
import Header from "./components/Header";
import Grid from "./components/Grid";
import Modal from './components/Modal';
import './app.css';

function App() {
  const state = useFetch(`https://rickandmortyapi.com/api/character`);
  
  const [cards, setCards] = useState([]);
  const [lives, setLives] = useState(3);
  const [existingPairs, setExistingPairs] = useState(0);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [resetCard, setResetCard] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [isWinner, setIsWinner] = useState(null);

  const [reset, setReset] = useState(false);

  const handleReset = () => {

    setReset(true);
    setLives(3);
    setCorrectCounter(0);
    setResetCard([]);
    setCurrentCard(null);
    setIsWinner(null);
    // This setTimeout is to not show the final mix
    setTimeout(() => {
      mixCardsAddPairs();
    },500)

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

      <Header lives={lives} existingPairs={existingPairs} correctCounter={correctCounter} handleReset={handleReset} />

      <Grid cards={cards} handleClick={handleClick} resetCard={resetCard} reset={reset} setReset={setReset}/>
      {
        isWinner !== null ? isWinner ? <Modal isWinner={isWinner}/> : <Modal isWinner={isWinner}/> : ''
      }
      
    </div> 
  );
}

export default App;
