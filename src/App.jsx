import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import GameWrapper from './components/layout/GameWrapper'
import { GameProvider } from './components/GameProvider'
import MoveGrid from './components/core/MoveGrid'


function App() {

  return (
    <div>
      <GameProvider>
        <GameWrapper>
          <Header />
          <Main />
          <Footer />
          <MoveGrid />
        </ GameWrapper>
      </GameProvider>
    </div>
  )
}

export default App
