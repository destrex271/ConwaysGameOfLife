import React, { useEffect ,useState} from 'react'
import Tile from './components/Tile';
import Row from './components/Row';

function App() {
  
  const rows = 40;
  const cols = 20;
  const [tiles, setTiles] = useState([])
  const [tileVal, setTileVal] = useState([])
  const [done, setDone] = useState(false);  
  const onBtnClick = (active, i, j) => {
    let tilesZ = tileVal.slice();
    if(active){
      tilesZ[i][j] = 0;
    }else{
      tilesZ[i][j] = 1;
    }
    setTileVal(tilesZ);
    console.log(tilesZ[i][j])
  }

  const aliveCount = () => {
    let alive = 800
    tileVal.map(
      (row) => {
        row.map(
          (col) => {
            if(col == 0){
              alive --
              return col
            }
          }
        )
      }
    )
    return alive;
  }

  const getNeighbours = (i, j) => {
    var alive = 0
    if((i>0 || i<rows-1) && (j>0 || j<cols-1)){
      setTileVal(tileVal.slice(0,41))
      if(tileVal[i-1][j] == 1){
        alive++
      }
      if(tileVal[i+1][j] == 1){
        alive++
      }
      if(tileVal[i][j-1] == 1){
        alive++
      }
      if(tileVal[i][j+1] == 1){
        alive++
      }
      if(tileVal[i-1][j-1] == 1){
        alive++
      }
      if(tileVal[i-1][j+1] == 1){
        alive++
      }
      if(tileVal[i+1][j+1] == 1){
        alive++
      }
      if(tileVal[i+1][j-1] == 1){
        alive++
      }
    }else{
      if(i == 0){
        if(j == 0){
          if(tileVal[i+1][j] == 1){
            alive++
          }
          if(tileVal[i][j+1] == 1){
            alive++
          }
          if(tileVal[i+1][j+1] == 1){
            alive++
          }
        }else if(j == cols-1){
          if(tileVal[i+1][j] == 1){
            alive++
          }
          if(tileVal[i][j-1] == 1){
            alive++
          }
          if(tileVal[i+1][j-1] == 1){
            alive++
          }
        }else{
          if(tileVal[i+1][j] == 1){
            alive++
          }
          if(tileVal[i][j-1] == 1){
            alive++
          }
          if(tileVal[i][j+1] == 1){
            alive++
          }
          if(tileVal[i+1][j-1] == 1){
            alive++
          }
          if(tileVal[i+1][j+1] == 1){
            alive++
          }
        }
      }
      else if(i == rows -1){
        if(j == 0){
          if(tileVal[i-1][j] == 1){
            alive++
          }
          if(tileVal[i][j+1] == 1){
            alive++
          }
          if(tileVal[i-1][j+1] == 1){
            alive++
          }
        }else if(j == cols-1){
          if(tileVal[i-1][j] == 1){
            alive++
          }
          if(tileVal[i][j-1] == 1){
            alive++
          }
          if(tileVal[i-1][j-1] == 1){
            alive++
          }
        }else{
          if(tileVal[i-1][j] == 1){
            alive++
          }
          if(tileVal[i][j-1] == 1){
            alive++
          }
          if(tileVal[i][j+1] == 1){
            alive++
          }
          if(tileVal[i-1][j-1] == 1){
            alive++
          }
          if(tileVal[i-1][j+1] == 1){
            alive++
          }
        }
      }
    }
    return alive
  }
  const runChecks = () => {      
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        const alive = getNeighbours(i, j);
        if(tileVal[i][j] == 1){
          if(alive < 2 || alive > 3){
            tileVal[i][j] = 0
          }
        }else{
          if(alive == 3){
            tileVal[i][j] = 1
          }
        }
      }
    }
  }
  const playGame = () => {
    while(aliveCount() != 0){
      runChecks();
    }
  }

  useEffect(()=>{
    const tilesX = [];
    const tilesY = [];
    for(let i = 0; i < rows; i++){
      const y = []
      for(let j = 0; j < cols; j++){
        y.push(0)
      }
      tilesY.push(y);
      // tileVal.push(y)
    }
    console.log("Ok")
    // setTileVal(tilesY)
    console.log(tileVal)
    for(let i = 0; i < rows; i++){
      const x = []
      for(let j = 0; j < cols; j++){
        x.push(<Tile aliveInit={(tileVal[i][j] == 0)?false:true} x={i} y={j} onpush={onBtnClick} />)
      }
      tilesX.push(x)
    }
    setTiles(tilesX)
    setDone(true);
    console.log(done)
  },
  [])

  return (
    <div className="App">
     {(done)?
        (<div className='tilemap'>
          {
            tiles.map((row,i)=>{
              return <Row col={row} i={i} />
            })
          }
          <div><button onClick={() => {playGame()}}>Play</button></div>
        </div>
        
        ):<div>Loading...</div>}
    </div>
  );
}

export default App;
