import { useEffect, useState, useRef } from 'react'
import './games-styles/SimonSays-style.css'
import border from '../assets/SimonSays-border.png'

export const SimonSays = () => {
  const speech = new SpeechSynthesisUtterance();
  speech.lang = 'es-CO';

/*  useEffect(() => {
    const interval = setInterval(() => {
      speech.text = 'Dale al espacio para empezar el juego!'
      speechSynthesis.speak(speech)
    }, 10000)

    return () => clearInterval(interval)
  }, [])
*/

  const buttonsRef1 = useRef(null);
  const buttonsRef2 = useRef(null);
  const buttonsRef3 = useRef(null);
  const buttonsRef4 = useRef(null);

  useEffect(() => {
    buttonsRef1.current.focus();
    buttonsRef2.current.focus();
    buttonsRef3.current.focus();
    buttonsRef4.current.focus();
  }, []);

  const [isHovered, setIsHovered] = useState(false)

  const handleKeyDownUP = (event) => {
    if (event.keyCode === 38) {
      console.log('arriba')
      speech.text = 'Arriba!'
      speechSynthesis.speak(speech)
    }
  }

  const handleKeyDownRight = (event) => {
    if (event.keyCode === 39) {
      console.log('derecha')
      speech.text = 'Derecha!'
      speechSynthesis.speak(speech)
    }
  }

  const handleKeyDownDown = (event) => {
    if (event.keyCode === 40) {
      console.log('arriba')
      speech.text = 'Abajo!'
      speechSynthesis.speak(speech)
    }
  }

  const handleKeyDownLeft = (event) => {
    if (event.keyCode === 37) {
      console.log('izquierda')
      speech.text = 'Izquierda!'
      speechSynthesis.speak(speech)
    }
  }

  return (
    <div className="SimonSays-container">
      <h1 className="SimonSays-title">SIMON SAYS</h1>
      <div className='SimonSays-container-game'>
        <div className="SimonSays-button-container">
          <button
            className={isHovered ? 'SimonSays-buttons hovered-button' : 'SimonSays-buttons'}
            onKeyDown={handleKeyDownUP}
            ref={buttonsRef1}
          ></button>
          <button
            className={isHovered ? 'SimonSays-buttons hovered-button' : 'SimonSays-buttons'}
            onKeyDown={handleKeyDownRight}
            ref={buttonsRef2}
          ></button>
          <button
            className={isHovered ? 'SimonSays-buttons hovered-button' : 'SimonSays-buttons'}
            onKeyDown={handleKeyDownDown}
            ref={buttonsRef3}
          ></button>
          <button
            className={isHovered ? 'SimonSays-buttons hovered-button' : 'SimonSays-buttons'}
            onKeyDown={handleKeyDownLeft}
            ref={buttonsRef4}
          ></button>
        </div>
        <img src={border} alt="" className="border" />
      </div>
    </div>
  )
}
