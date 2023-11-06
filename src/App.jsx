import { useRef, useEffect, useState } from 'react'
import { Menu } from './views/Menu'
import { SimonSays } from './games/SimonSays'
import { Trivia } from './games/Trivia'
import { PauseButton } from './components/PauseButton'
import mainTheme from './audio/main-theme.mp3'
import useSound from 'use-sound'
import './App.css'

function App() {
  const gameContainerRef = useRef(null)
  const [screen, setScreen] = useState('Menu')
  const [play] = useSound(mainTheme)

  const handleFullscreen = () => {
    const gameContainer = gameContainerRef.current

    if (gameContainer) {
      if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen()
      } else if (gameContainer.mozRequestFullScreen) {
        gameContainer.mozRequestFullScreen()
      } else if (gameContainer.webkitRequestFullscreen) {
        gameContainer.webkitRequestFullscreen()
      }
    }
  }

  const changeScreen = (newScreen) => {
    setScreen(newScreen)
  }

  return (
    <>
      <main>
        <div ref={gameContainerRef} id="game-container">
          <PauseButton />
          {screen === 'Menu' && <Menu changeScreen={changeScreen} />}
          {screen === 'SimonSays' && <SimonSays changeScreen={changeScreen} />}
          {screen === 'Trivia' && <Trivia changeScreen={changeScreen} />}
        </div>

        <button className="button-fullscreen" onClick={handleFullscreen}>
          Pantalla completa
        </button>
      </main>
    </>
  )
}

export default App
