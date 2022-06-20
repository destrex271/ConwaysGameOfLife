import React from 'react'

function App() {

  const [tileStateMatrix, setTileStateMatrix] = useState([]);
  const [isSetupDone, setIsSetupSone] = useState(false)

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

  return (
    <div className="App">
        ({isSetupDone}?
          (
            
          )
          :<div>Loading....</div>
        )
    </div>
  );
}

export default App;
