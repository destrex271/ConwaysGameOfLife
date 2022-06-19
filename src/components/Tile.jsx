import React, { useState } from 'react'
import styles from './Tile.module.css'

function Tile({aliveInit, x, y, onpush}) {

  const [alive, setAlive] = useState(aliveInit)

  const setStat = () => {
    setAlive(!alive)
    onpush(alive, x, y)
  }

  return (
    <div>
      <button 
        className={(alive)?styles.buttonClicked:styles.buttonNotClicked}
        onClick = {() => setStat()}
      >
      </button>
    </div>
  )
}

export default Tile