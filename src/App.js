import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0)
  const [showNumberPlayersInput, setShowNumberPlayersInput] = useState(true)
  const [playerTurn, setPlayerTurn] = useState(null)
  const handleNumberOfPlayersChange = (event) => {
    setNumberOfPlayers(event.target.value)
  }

  const [movies, setMovies] = useState([])

  useEffect({


  }, [])
  
  if (showNumberPlayersInput) {
    return (
      <div>
        How many are you?
        <input style={{ width: '150px' }} type="text" pattern="[0-9]*" onChange={handleNumberOfPlayersChange} />
        <button title='OK' onClick={setShowNumberPlayersInput.bind(this, false)}>OK</button>
      </div>
    )
  }

  return (
    <div className="App">
      You are {numberOfPlayers}!
      <div>
        Player {playerTurn} it's your turn!
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
