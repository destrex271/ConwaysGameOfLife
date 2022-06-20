import React from 'react'
import {useState, useEffect} from 'react';
import Tile from './components/Tile';

function App() {

  const [tileStateMatrix, setTileStateMatrix] = useState([]);
  const [isSetupDone, setIsSetupSone] = useState(false)
  const rows = 20
  const cols = 40

  useEffect(() => {
    // Populate Matrix with false values for intial state
    const populateMatrix = () =>{
      const matrix = [];
      for(let i = 0; i < rows; i++){
        matrix.push([]);
        for(let j = 0; j < cols; j++){
          matrix[i].push(false);
        }
      }
      return matrix;
    }
    setTileStateMatrix(populateMatrix());
    setIsSetupSone(true)
  },[])

  const chngState = (i, j, statefn) => {
    const newMatrix = [...tileStateMatrix];
    newMatrix[i][j] = !newMatrix[i][j];
    setTileStateMatrix(newMatrix);
    console.log(tileStateMatrix[i][j])
    statefn(tileStateMatrix[i][j])
  }

  return (
    <div className="App">
        {(isSetupDone)?(
                tileStateMatrix.map((row, i) => {
                  return (<div>{row.map((col, j) => {
                    return (
                      <Tile alive={col} onclick={(statefn) => chngState(i,j,statefn)}/>
                    )
                  })}</div>)
                  }
                )
              )
            :(<div>Loading...</div>)}
    </div>
  );
}

export default App;
