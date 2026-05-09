import { useState } from 'react'

const gridSize = 16;
const defaultColor = '#ff0000'

function makeGrid(){
  return Array.from({
    length: gridSize },
    () => Array(gridSize).fill(defaultColor))
}

function App() {
  const [grid, setGrid] = useState(makeGrid)
  const [color, setColor] = useState(defaultColor)

  
  return (
    <>
      <h1>Pixel Art Editor</h1>

      <div id="colorSelector">
        <h3>Color</h3>
        <div id="currentColor"></div>
        <div id="colorOptions"></div>
        <button id="clearButton" onClick={() => (
          setGrid([...grid, 1],
          console.log({grid})
          ))}>Clear</button>
        
        <p>Click any cell to paint it with the current color.</p>

      </div>
    </>
  )
}

export default App
