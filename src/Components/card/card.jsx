
import './card.css';
import './flip-transition.css';
import { flashCardsList } from '../../data';
import { useState } from 'react';

function Card({onClick}){
    const [index, setIndex] = useState(0);

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function handleClick() {
        setIndex(randomNumberInRange(0, flashCardsList.length-1));
      }

      let flashcard = flashCardsList[index];

    return (
        
        <>   
        <div className='card' onClick={onClick}>
            <div className ="card-back">{flashcard.answer}</div>
            <div className ="card-front"> {flashcard.question} </div>
        </div>
        <br></br>
         <button onClick={handleClick}>
         →
       </button>
       </>
    );

}
export default Card;
