import React from 'react'
import styles from './Tile.module.css'

import React, {useState, useEffect} from 'react';
import styles from './Tile.module.css';

function Tile(){

  const [isAlive, setIsAlive] = useState(false);

  return(
    <div>
      <button className={isAlive?styles.buttonClicked:styles.buttonNotClicked}></button>
    </div>
  );
}

export default Tile;