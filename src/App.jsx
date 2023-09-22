import './App.css';
import FlippableCard from './Components/flippable-card';
import { flashCardsList } from './data';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <h1>The Ultimate For Learning History!!</h1>
        <h2>How good of History are you? Test!! all your history knowledge here!</h2> 
        <h3>Number of cards: {flashCardsList.length}</h3>  
      </div>         
      <FlippableCard/>  
    </div>
  )
}

export default App