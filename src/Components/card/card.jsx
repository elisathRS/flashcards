
import './card.css';
import './flip-transition.css';
import { flashCardsList } from '../../data';
import { useState, useEffect } from 'react';

function Card({onClick}){
    const [index, setIndex] = useState(0);
    const [userGuess, setUserGuess] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const[nextClicked, setNextClicked] = useState(false);
    
    useEffect(() => {
        if (nextClicked) {
          setUserGuess(''); 
          setNextClicked(false);
        }
      }, [nextClicked]);

     function handleClickNext() {
        if(index < flashCardsList.length-1){
        setIndex(index + 1);
        setUserGuess('');
        setIsCorrect(null);

        }
        
      }

      function handleClickPrev() {
        if(index > 0){
        setIndex(index - 1);
        setUserGuess('');
        setIsCorrect(null);
    
        }
        
      }

      function handleSubmit(){
        const correctAnswer = flashCardsList[index].answer.toLowerCase();
        const userGuessLower = userGuess.toLowerCase();

        if(correctAnswer === userGuessLower){
            setIsCorrect(true);
            setStatusButton(true);

        }else{
            setIsCorrect(false);
            statusButton(true);
             
        }



      }

      let flashcard = flashCardsList[index];

      let inputClassName = '';
      if (isCorrect === null && nextClicked) {
        inputClassName = 'white-background';
      } else if (isCorrect === false) {
        inputClassName = 'red-background';
      } else if (isCorrect === true) {
        inputClassName = 'green-background';
      }

    return (
   
        <>   
        <div className='card' onClick={onClick}>
            <div className ="card-back">{flashcard.answer}</div>
            <div className ="card-front"> {flashcard.question} </div>
        </div>
        <br></br>
      
        <text>Guess the answer here: </text>
         <input
            type="text"
            placeholder="Place your answer here.."
            value={userGuess}
            onChange={(e) =>setUserGuess(e.target.value)}
            className={inputClassName}
         />   
        <button onClick= {handleSubmit}>Submit Guess</button>
       
        <br></br>
        <br></br>
        <button onClick={handleClickPrev}>
         ←
       </button>
         <button onClick={() => { setNextClicked(true); handleClickNext(); }}>
         →
       </button>
       </>
    );

}
export default Card;
