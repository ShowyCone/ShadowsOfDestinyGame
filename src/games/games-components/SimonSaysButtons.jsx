import { useEffect, useState, useCallback } from 'react'
import '../games-styles/SimonSays-style.css'

export const SimonSaysButtons = ({ says, keyCodeDirection, stateButton }) => {
  const speech = new SpeechSynthesisUtterance()
  speech.lang = 'es-CO'
  const [isHovered, setIsHovered] = useState(false)

  let keySounds = useCallback(() => {
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === keyCodeDirection) {
        console.log(says)
        speech.text = says
        speechSynthesis.speak(speech)
        setIsHovered(true)
        setTimeout(() => setIsHovered(false), 2000)
      }
    })
  }, [])

  useEffect(() => {
    keySounds()
  }, [])

  return (
    <button
      className={
        isHovered ? 'SimonSays-buttons hovered-button' : 'SimonSays-buttons'
      }
    ></button>
  )
}
