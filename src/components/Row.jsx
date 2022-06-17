import React from 'react'

function Row({col, i}) {
  
  return (
    <div>
        {col.map((col,j)=>{
            return col
        })}
        <br />
    </div>
  )
}

export default Row