import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="background page">
         {/* <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}
        <h1>Pathfinder App</h1>
        
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> to develop Pathfinder App!
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
      </div> 
      <DisplaySteps />
    </>
  )
}

function DisplaySteps() {
  
  return (
      <div className="background page">
          {PageHead("Display Screen")}
          <StepDisplay />
          <MapDisplay />
          
      </div>
  )
}

function PageHead(title: string) { 
  
  return (
      <div className="headbox">
        <h2>Pathfinder App</h2>
        <h1>{title}</h1>
      </div>
  )
}

function MapDisplay() {
  
  return (
      <div className="mapbox">
          <img src="map1.png" alt="Map of campus"/>
      </div>
  )
}

function StepDisplay() {
  
  return (
      <div className="steps">
          <ul className="stepList">
            <li key="step1" className="step">Step 1</li>
            <li key="step2" className="step">Step 2</li>
            <li key="step3" className="step">Step 3</li>
            <li key="step4" className="step">Step 4</li>
          </ul>
      </div>
  )
}

export default App;
