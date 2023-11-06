import { useEffect } from 'react'
import './pause-button.css'

export const PauseButton = () => {
  useEffect(() => {
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 32) {
        handleOpenMenu()
      }
    })
  }, [])

  const handleOpenMenu = () => {
    alert('open pause menu')
  }

  return (
    <button className="pause-button" onClick={handleOpenMenu}>
      ⚙
    </button>
  )
}
