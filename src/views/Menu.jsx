import React from 'react'
import './views-styles/menu-styles.css'

export const Menu = ({ changeScreen }) => {
  const handleGoToSimonSays = () => {
    changeScreen('SimonSays')
  }

  const handleGoToTrivia = () => {
    changeScreen('Trivia')
  }

  return (
    <div className="menu-container">
      <ul className="menu-options-container">
        <li className="menu-options" onClick={handleGoToSimonSays}>
          Jugar SimonSays
        </li>
        <li className="menu-options" onClick={handleGoToTrivia}>
          Jugar Trivia
        </li>
        <li className="menu-options">Opciones</li>
      </ul>
    </div>
  )
}
