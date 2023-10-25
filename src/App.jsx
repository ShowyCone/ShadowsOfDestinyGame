import { useRef } from 'react'
import { SimonSays } from './games/SimonSays'
import './App.css'

function App() {
  const gameContainerRef = useRef(null)

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

  return (
    <main>
      <div ref={gameContainerRef} id="game-container">
        <SimonSays />
      </div>

      <button id="fullscreen-button" onClick={handleFullscreen}>
        Pantalla completa
      </button>
    </main>
  )
}

export default App
