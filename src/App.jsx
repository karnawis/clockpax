import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import GameWrapper from './components/layout/GameWrapper'

function App() {

  return (
    <div>
      <GameWrapper>
        <Header />
        <Main />
        <Footer />
      </ GameWrapper>
    </div>
  )
}

export default App
