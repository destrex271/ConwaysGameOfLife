import React from 'react'
import styles from './Tile.module.css'
import {useState, useEffect} from 'react';

function Tile({alive, onclick}) {

  const [isAlive, setIsAlive] = useState(alive);

  return(
      <button className={isAlive?styles.buttonClicked:styles.buttonNotClicked} onClick={() => onclick(setIsAlive)} ></button>
  );
}

export default Tile;