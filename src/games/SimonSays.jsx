import { SimonSaysButtons } from './games-components/SimonSaysButtons'
import './games-styles/SimonSays-style.css'
import border from '../assets/SimonSays-border.png'
import mainTheme from '../audio/main-theme.mp3'

export const SimonSays = () => {
  return (
    <div className="SimonSays-container">
      <audio src={mainTheme} autoPlay loop hidden />
      <h1 className="SimonSays-title">SIMON SAYS</h1>
      <div className="SimonSays-container-game">
        <div className="SimonSays-button-container">
          <SimonSaysButtons
            says={'1'}
            keyCodeDirection={81}
            stateButton={true}
          />
          <SimonSaysButtons
            says={'2'}
            keyCodeDirection={87}
            stateButton={true}
          />
          <SimonSaysButtons
            says={'3'}
            keyCodeDirection={65}
            stateButton={true}
          />
          <SimonSaysButtons
            says={'4'}
            keyCodeDirection={83}
            stateButton={true}
          />
        </div>
        <img src={border} alt="" className="border" />
      </div>
    </div>
  )
}
