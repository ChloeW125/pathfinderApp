import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './home.css'
import DisplaySteps from './DisplaySteps'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import HelpPage from './HelpPage'


function App() {
  const [page, setPage] = useState("home")
  setPage("home")

  if (page == "home") {
    return (
      <>
        {/*<div className="background page">
            <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 id="title">Pathfinder App</h1>
          
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> to develop Pathfinder App!
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p> 
        </div> */}
        
        {HomePage(setPage)}
      </>
   
    )
  } else if (page == "search") {return SearchPage(setPage)}
    else if (page == "help") {return HelpPage()}
    else if (page == "display") {return DisplaySteps(setPage)}
    else console.log("sdfsadf")
}



export default App;
