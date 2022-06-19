import React, { useEffect ,useState} from 'react'
import Tile from './components/Tile';
import Row from './components/Row';

function App() {
  
  const rows = 40;
  const cols = 20;
  const [tiles, setTiles] = useState([])
  const [tileVal, setTileVal] = useState([])
  const [done, setDone] = useState(false);
  const [once, setOnce] = useState(true);
  const [timer, setTimer] = useState(0)

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
        y.push(<Tile aliveInit={(tileVal[i][j] == 0)?false:true} x={i} y={j} onpush={onBtnClick} />)
      }
      tiles.push(y)
    }
    console.log(tileVal)
    setDone(true)
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
        if(tileVal[i][j] == 1){
          aliveCount++
        }
      }
    }
    return aliveCount;
  }

  const getNeighbours = (i, j) => {
    let neighbours = 0
    if((i > 0 && i < rows - 1) && (j > 0 && j < cols - 1)){
      if(tileVal[i-1][j] == 1){
        neighbours++
      }
      if(tileVal[i+1][j] == 1){
        neighbours++
      }
      if(tileVal[i][j-1] == 1){
        neighbours++
      }
      if(tileVal[i][j+1] == 1){
        neighbours++
      }
      if(tileVal[i-1][j-1] == 1){
        neighbours++
      }
      if(tileVal[i-1][j+1] == 1){
        neighbours++
      }
      if(tileVal[i+1][j-1] == 1){
        neighbours++
      }
      if(tileVal[i+1][j+1] == 1){
        neighbours++
      }
    }else if(i == 0 && j==0){
      if(tileVal[i+1][j] == 1){
        neighbours++
      }
      if(tileVal[i][j+1] == 1){
        neighbours++
      }
      if(tileVal[i+1][j+1] == 1){
        neighbours++
      }
    }else if(i == 0 && j==cols-1){
      if(tileVal[i+1][j] == 1){
        neighbours++
      }
      if(tileVal[i][j-1] == 1){
        neighbours++
      }
      if(tileVal[i+1][j-1] == 1){
        neighbours++
      }
    }else if(i == rows-1 && j==0){
      if(tileVal[i-1][j] == 1){
        neighbours++
      }
      if(tileVal[i][j+1] == 1){
        neighbours++
      }
      if(tileVal[i-1][j+1] == 1){
        neighbours++
      }
    }else if(i == rows-1 && j==cols-1){
      if(tileVal[i-1][j] == 1){
        neighbours++
      }
      if(tileVal[i][j-1] == 1){
        neighbours++
      }
      if(tileVal[i-1][j-1] == 1){
        neighbours++
      }
    }else if(i == 0){
      if(tileVal[i+1][j] == 1){
        neighbours++
      }
      if(tileVal[i][j-1] == 1){
        neighbours++
      }
      if(tileVal[i+1][j-1] == 1){
        neighbours++
      }
      if(tileVal[i+1][j+1] == 1){
        neighbours++
      }
      if(tileVal[i][j+1] == 1){
        neighbours++
      }
    }else if(i == rows-1){
      if(tileVal[i-1][j] == 1){
        neighbours++
      }
      if(tileVal[i][j-1] == 1){
        neighbours++
      }
      if(tileVal[i-1][j-1] == 1){
        neighbours++
      }
      if(tileVal[i-1][j+1] == 1){
        neighbours++
      }
      if(tileVal[i][j+1] == 1){
        neighbours++
      }
    }else if(j == 0){
      if(tileVal[i-1][j] == 1){
        neighbours++
      }
      if(tileVal[i+1][j] == 1){
        neighbours++
      }
      if(tileVal[i-1][j+1] == 1){
        neighbours++
      }
      if(tileVal[i+1][j+1] == 1){
        neighbours++
      }
      if(tileVal[i][j+1] == 1){
        neighbours++
      }
    }else if(j == cols-1){
      if(tileVal[i-1][j] == 1){
        neighbours++
      }
      if(tileVal[i+1][j] == 1){
        neighbours++
      }
      if(tileVal[i-1][j-1] == 1){
        neighbours++
      }
      if(tileVal[i+1][j-1] == 1){
        neighbours++
      }
      if(tileVal[i][j-1] == 1){
        neighbours++
      }
    }
    console.log(neighbours)
    return neighbours
  }
  const runChecks = () => {
    console.log("Checking....")
    const tl = tileVal.slice()
    const tv = tiles.slice()
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        const alive = getNeighbours(i, j);
        if(tl[i][j] == 1){
          if(alive < 2 || alive > 3){
            tl[i][j] = 0
            setTileVal(tl)
            changeTile()
            console.log(tileVal[i][j])
          }
        }else{
          if(alive == 3){
            tl[i][j] = 1
            setTileVal(tl)
            changeTile()
            console.log(tileVal[i][j])
          }
        }
      }
    }
    setTileVal(tl)
    setTiles([...tiles])
  }
  const stop = () => {
    console.log("Test")
    clearTimeout(timer)
  }
  const changeTile = () => {
    for(let i = 0; i < rows; i++){
      const val = []
      for(let j = 0; j < cols; j++){
        val.push(<Tile activeInit={(tileVal[i][j] == 0)?false:true} x={i} y={j} />)
      }
    }
    setTiles([...tiles])
  }
  const playGame = () => {
    if(once){
      setTimer(setInterval(playGame, 6000));
      const st = tileVal.slice()
      st[10][10] = 1
      setTileVal(st)
      changeTile()
      setOnce(false)
    }
    let x = aliveCount()
    console.log(x)
    if(x==0) {clearInterval(timer); stop();}
    else{
      runChecks()
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