import { useState } from 'react'
import gameImage from './assets/unleaving-video-game-cynic-red-horse.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <h1 className="text-3xl font-bold text-red-500">
        Paxoria Game
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        <a href="https://unleaving.com" target="_blank">
          <img src={gameImage} alt="game image" />
        </a>
        </p>
      </div>
      <p className="read-the-docs">
        Click on game to learn more
      </p>
    </>
  )
}

export default App
