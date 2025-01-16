import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import GameMain from './components/layout/GameMain'
import GameWrapper from './components/layout/GameWrapper'
import { GameProvider } from './components/GameProvider'

function App() {
  const year = new Date().getFullYear();
  return (
    <div>
      <GameProvider>
        <GameWrapper>
          <Header />
          <GameMain />
          <Footer />
          <footer>
              <p className=" font-bold  text-slate-500">© {year} - All rights reserved - Sura </p>
          </footer>
        </ GameWrapper>
      </GameProvider>
    </div>
  )
}

export default App