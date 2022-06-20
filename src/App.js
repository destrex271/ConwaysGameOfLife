import React from 'react'
import {useState, useEffect} from 'react';
import Tile from './components/Tile';

function App() {

  const [tileStateMatrix, setTileStateMatrix] = useState([]);
  const [isSetupDone, setIsSetupSone] = useState(false)
  const rows = 40
  const cols = 20

  useEffect(() => {
    // Populate Matrix with false values for intial state
    const populateMatrix = () =>{
      const matrix = [];
      for(let i = 0; i < 10; i++){
        matrix.push([]);
        for(let j = 0; j < 10; j++){
          matrix[i].push(false);
        }
      }
      return matrix;
    }
    setTileStateMatrix(populateMatrix());
    setIsSetupSone(true)
  },[])

  const chngState = (i, j) => {
    const newMatrix = [...tileStateMatrix];
    newMatrix[i][j] = !newMatrix[i][j];
    setTileStateMatrix(newMatrix);
  }

  return (
    <div className="App">
        ({isSetupDone}?
          (
            {
              tileStateMatrix.map((row, i) => {
                return row.map((col, j) => {
                  return <Tile alive={col} onclick={() => chngState(i,j)}/>
                })
                }
              )
            }
          )
          :<div>Loading....</div>
        )
    </div>
  );
}

export default App;
