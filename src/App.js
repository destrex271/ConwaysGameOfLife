import React, { useEffect ,useState} from 'react'
import Tile from './components/Tile';
import Row from './components/Row';

function App() {
  
  const rows = 40;
  const cols = 20;
  const [tiles, setTiles] = useState([])
  const [tileVal, setTileVal] = useState([])
  const [done, setDone] = useState(false);

  useEffect(() => {
    for(let i = 0; i < rows; i++){
      const y = []
      for(let j = 0; j < cols; j++){
        y.push(0)
      }
      tileVal.push(y)
    }
    for(let i = 0; i < rows; i++){
      const y = []
      for(let j = 0; j < cols; j++){
        y.push(<Tile aliveInit={tileVal[i][j]} x={i} y={j} onpush={onBtnClick} />)
      }
      tileVal.push(y)
    }
    if(tileVal.length !== 0 && tiles.length !== 0){
      setDone(true)
    }
  },[])


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
    let aliveCount = 0
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        if(tileVal[i][j] === 1){
          aliveCount++
        }
      }
    }
    return aliveCount;
  }

  const getNeighbours = (i, j) => {
    return 3
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



// var alive = 0
//     if((i>0 || i<rows-1) && (j>0 || j<cols-1)){
//       setTileVal(tileVal.slice(0,41))
//       if(tileVal[i-1][j] == 1){
//         alive++
//       }
//       if(tileVal[i+1][j] == 1){
//         alive++
//       }
//       if(tileVal[i][j-1] == 1){
//         alive++
//       }
//       if(tileVal[i][j+1] == 1){
//         alive++
//       }
//       if(tileVal[i-1][j-1] == 1){
//         alive++
//       }
//       if(tileVal[i-1][j+1] == 1){
//         alive++
//       }
//       if(tileVal[i+1][j+1] == 1){
//         alive++
//       }
//       if(tileVal[i+1][j-1] == 1){
//         alive++
//       }
//     }else{
//       if(i == 0){
//         if(j == 0){
//           if(tileVal[i+1][j] == 1){
//             alive++
//           }
//           if(tileVal[i][j+1] == 1){
//             alive++
//           }
//           if(tileVal[i+1][j+1] == 1){
//             alive++
//           }
//         }else if(j == cols-1){
//           if(tileVal[i+1][j] == 1){
//             alive++
//           }
//           if(tileVal[i][j-1] == 1){
//             alive++
//           }
//           if(tileVal[i+1][j-1] == 1){
//             alive++
//           }
//         }else{
//           if(tileVal[i+1][j] == 1){
//             alive++
//           }
//           if(tileVal[i][j-1] == 1){
//             alive++
//           }
//           if(tileVal[i][j+1] == 1){
//             alive++
//           }
//           if(tileVal[i+1][j-1] == 1){
//             alive++
//           }
//           if(tileVal[i+1][j+1] == 1){
//             alive++
//           }
//         }
//       }
//       else if(i == rows -1){
//         if(j == 0){
//           if(tileVal[i-1][j] == 1){
//             alive++
//           }
//           if(tileVal[i][j+1] == 1){
//             alive++
//           }
//           if(tileVal[i-1][j+1] == 1){
//             alive++
//           }
//         }else if(j == cols-1){
//           if(tileVal[i-1][j] == 1){
//             alive++
//           }
//           if(tileVal[i][j-1] == 1){
//             alive++
//           }
//           if(tileVal[i-1][j-1] == 1){
//             alive++
//           }
//         }else{
//           if(tileVal[i-1][j] == 1){
//             alive++
//           }
//           if(tileVal[i][j-1] == 1){
//             alive++
//           }
//           if(tileVal[i][j+1] == 1){
//             alive++
//           }
//           if(tileVal[i-1][j-1] == 1){
//             alive++
//           }
//           if(tileVal[i-1][j+1] == 1){
//             alive++
//           }
//         }
//       }
//     }