import React from 'react'
import { UsePacmanMovement, UseGhostAI } from './hooks'
import { Board, Ghosts, Pacman, Pellets, Powerpellets, Scoreboard, Walls } from './components/GameBoard'
import { Startscreen } from './components/StartScreen'


const App = () => {
  return (
    <div>Pacman
      <Startscreen />
    </div>
  )
}

export default App