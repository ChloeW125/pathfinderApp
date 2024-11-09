import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map1 from './map1.png';

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

function DisplaySteps() {
  
    return (
        <div className="background page">
            {PageHead("Display Screen")}
            {StepDisplay("Location A", "Location B", steps)}
            <MapDisplay />
            
        </div>
    )
  }
  
  function PageHead(title: string) { 
    
    return (
        <div className="head box">
          <a href='#title' className='homelink'><h2>Pathfinder App</h2></a>
          <h1>{title}</h1>
        </div>
    )
  }
  
  function MapDisplay() {
    
    return (
        <div className="map box">
            <img src={Map1} alt="Map of campus" width="200px" height="200px"/>
        </div>
    )
  }
  
  function StepDisplay(start: string, end: string, stepList: string[]) {
    
    return (
        <div className="steps">
            <h2>{start} to {end}</h2>
            <ul className="stepList">
              { stepList.map((step: string,i: number) => StepBox(step,i))}
            </ul>
        </div>
    )
  }

  function StepBox(step: string, key: number) {
    return (
        <li key={"step-"+key} className="step">{step}</li>
    )
  }

  export default DisplaySteps;