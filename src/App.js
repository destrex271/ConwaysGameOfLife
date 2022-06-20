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

  const getAliveNeighbours = (i, j) => {
    let nCount = 0;
    if((i > 0 && i < rows-1) && (j > 0 && j < cols)){
      if(tileStateMatrix[i-1][j-1]){
        nCount++;
      }
      if(tileStateMatrix[i-1][j]){
        nCount++;
      }
      if(tileStateMatrix[i-1][j+1]){
        nCount++;
      }
      if(tileStateMatrix[i][j-1]){
        nCount++;
      }
      if(tileStateMatrix[i][j+1]){
        nCount++;
      }
      if(tileStateMatrix[i+1][j-1]){
        nCount++;
      }
      if(tileStateMatrix[i+1][j]){
        nCount++;
      }
      if(tileStateMatrix[i+1][j+1]){
        nCount++;
      }
    }else if(i === 0){
      if(j === 0){
        if(tileStateMatrix[i][j+1]){
          nCount++;
        }
        if(tileStateMatrix[i+1][j]){
          nCount++;
        }
        if(tileStateMatrix[i+1][j+1]){
          nCount++;
        }
      }else if(j === cols-1){
        if(tileStateMatrix[i][j-1]){
          nCount++;
        }
        if(tileStateMatrix[i+1][j-1]){
          nCount++;
        }
        if(tileStateMatrix[i+1][j]){
          nCount++;
        }
      }else{
        if(tileStateMatrix[i][j-1]){
          nCount++;
        }
        if(tileStateMatrix[i][j+1]){
          nCount++;
        }
        if(tileStateMatrix[i+1][j-1]){
          nCount++;
        }
        if(tileStateMatrix[i+1][j]){
          nCount++;
        }
        if(tileStateMatrix[i+1][j+1]){
          nCount++;
        }
      }
    }else if(i === cols-1){
      if(j === 0){
        if(tileStateMatrix[i][j+1]){
          nCount++;
        }
        if(tileStateMatrix[i-1][j]){
          nCount++;
        }
        if(tileStateMatrix[i-1][j+1]){
          nCount++;
        }
      }else if(j === cols-1){
        if(tileStateMatrix[i][j-1]){
          nCount++;
        }
        if(tileStateMatrix[i-1][j-1]){
          nCount++;
        }
        if(tileStateMatrix[i-1][j]){
          nCount++;
        }
      }else{
        if(tileStateMatrix[i][j-1]){
          nCount++;
        }
        if(tileStateMatrix[i][j+1]){
          nCount++;
        }
        if(tileStateMatrix[i-1][j-1]){
          nCount++;
        }
        if(tileStateMatrix[i-1][j]){
          nCount++;
        }
        if(tileStateMatrix[i-1][j+1]){
          nCount++;
        }
      }
    }
    return nCount;
  }

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
