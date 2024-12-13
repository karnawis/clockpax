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
        <p>
        <a href="https://unleaving.com" target="_blank">
          <img src={gameImage} alt="game image" />
        </a>
        </p>
      </div>
      <p className="read-the-docs">
      <button onClick={() => setCount((count) => count + 1)}>
          <span className="text-red-500 text-4xl">count is {count}</span>
        </button>
      </p>
    </>
  )
}

export default App
