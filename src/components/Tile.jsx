import React from 'react'
import styles from './Tile.module.css'
import {useState, useEffect} from 'react';

function Tile({alive, onclick}) {

  const [isAlive, setIsAlive] = useState(alive);

  return(
    <div>
      <button className={isAlive?styles.buttonClicked:styles.buttonNotClicked} onClick={onclick} ></button>
    </div>
  );
}

export default Tile;