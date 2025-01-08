import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import GameWrapper from './components/layout/GameWrapper'
import { GameProvider } from './components/GameProvider'
import Panel from './components/core/Panel'


function App() {

  return (
    <div>
      <GameProvider>
        <GameWrapper>
          <Header />
          <Main />
          <Footer />
          <Panel />
        </ GameWrapper>
      </GameProvider>
    </div>
  )
}

export default App
