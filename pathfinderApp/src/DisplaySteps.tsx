import { useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import MC1 from './maps/MC1.png';
import SLC1 from './maps/SLC1.png';
import {pathDic} from './pathDic.tsx';

// https://www.shecodes.io/athena/38751-how-to-import-all-images-of-a-folder-into-a-react-component

// https://stackoverflow.com/questions/48560592/is-it-possible-to-import-a-group-of-images-as-an-array-create-react-app-projec

// const mapImgs = require.context('../maps', true);
// const mapList = mapImgs.keys().map(image => mapImgs(image))

const searchSteps = (step: any[], goal: number) => {
  for (let i = 0; i < step.length; i++) {
    if (step[i][0] = goal) {
      return step[i]
    }
    else if (step[i][0] > goal) {
      console.log("error")
      return "Error"
    }

  }
}

console.log(pathDic[1][0][2])

const steps = [
  searchSteps(pathDic[4], 2), 
  searchSteps(pathDic[2], 23),
  //searchSteps(pathDic.4, 2),
  //{text: "Step 4", start: SLC1, end: SLC1}
  searchSteps(pathDic[17], 8)];

class Map {
  constructor(addr: string, alt: string) {
    this.addr = addr;
    this.alt = alt;
  }
}

const maps = [
  new Map(MC1, "Homebrew Map"),
  new Map(SLC1, "1st Floor of SLC"),
  new Map(MC1, "Homebrew Map"),
  new Map(SLC1, "1st Floor of SLC")
];


const MapCanvas = (adr: string) => { 
  
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  
  let adre
  for (let i = 0; i < maps.length; i++) {
    if (maps[i].addr == adr) {
      adre = maps[i].addr
      console.log("clear")
    }
    console.log(adr + " " + maps[i].addr)
  }

  const draw = (ctx, frameCount, canvas) => {

    
    /*for (let i = 0; i < maps.length; i++) {
      if (maps[i].addr == adr) {
        adre = maps[i].addr
        console.log("clear")
      }
      console.log(adr + " " + maps[i].addr)
    } */

    canvas.style = "background-image: url("+adre+"); background-size: contain; background-repeat: no-repeat; vertical-align: center";

    // https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_drawimage
    //const image = <img src={adr} ref={imgRef} />
    //const currImg = imgRef.current;

    //ctx.drawImage(image, 0, 0, 500, 500);
    //ctx.fillStyle='#000000';
    //ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.width);

    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src

    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_src2
    //https://www.w3schools.com/jsref/canvas_filltext.asp
    //https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_drawimage
    //https://www.w3schools.com/graphics/canvas_images.asp
    
    const imgPoint = imgRef.current;

    const img2 = new Image();
    //img2.src = "C:/Users/Mary/pathfinderApp/pathfinderApp" + adr;
    img2.src = SLC1;
    img2.style.width = "300px";
    img2.style.height = "auto";
    //img2.id = "mymap"
    //https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/Fill_a_box_with_an_image
    //https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
    //img2.style = "object-fit: fill";

    ctx.font = "10px Georgia";
    
    //ctx.fillText(adr, 10, 90);
    //ctx.fillText("C:/Users/Mary/pathfinderApp/pathfinderApp", 10, 140)
    //ctx.fillText(adr.toString(), 10, 190)
    //ctx.drawImage(img2, 10, 10);
    //ctx.fillRect(200, 200, 50, 50)
    //ctx.fillText(img2.src, 10, 50);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //https://www.w3schools.com/cssref/pr_background-image.php
    //https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
    //https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/Fill_a_box_with_an_image
    console.log(adr)
    let frameCount = 0
    let animationFrameId

    const render = () => {
      frameCount++
      draw(ctx, frameCount, canvas)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
    

  }, [draw]); 

  const image = <img src={adr}  ref={imgRef} />; 

  return (
    <canvas id="display" ref={canvasRef} width="300px" height="225px" style={{background: adr}} />); 
}; 





// Used https://www.w3schools.com/graphics/canvas_intro.asp to learn how to use the canvas tag
// Also https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258 for how to implement
// Used codecademy and Khan academy for general knowledge



function DisplaySteps() {
  const [current, setCurr] = useState(0)
    //https://www.shecodes.io/athena/10997-how-to-add-an-onclick-event-in-react
    //https://legacy.reactjs.org/docs/hooks-state.html
    return (
        <div className="background page">
            {PageHead("Display Screen")}
            <h2>Location A to Location B</h2>
            <div className="box">
              <button onClick={() => setCurr(changeStep(steps, current, -1))} className='left'>Back</button>
              <h3>{current+1}. Go to {steps[current][2].substring(0, steps[current][2].length-4)}</h3>
              <button onClick={() => setCurr(changeStep(steps, current, 1))} className='right'>Next</button>
              {StepBox(steps[current])}
            </div>
            <div className="map box">
              {MapCanvas("/src/maps/"+steps[current][2])}
              

            </div>
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
  
  function MapDisplay(map: Map) {
    return (
        <div className="map box">
          <p>{//map.address
          }</p>
          
          {MapCanvas(map.addr)
          }
        </div>
    )
  }
  
  function StepDisplay(start: string, end: string, stepList: string[], curr: number) {
    
    return (
        <div className="steps">
            <h2>{start} to {end}</h2>
            
            {//<ul className="stepList">
              //stepList.map((step: string,i: number) => StepBox(step,i))
            }
              {StepBox(stepList)}
            
        </div>
    )
  }

  function StepBox(step) {
    
    return (
      <div className='doors'>
        <img className="door" src={MC1} width="100px" height="auto" alt={"leave from "+step[2]}/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Arrow-v2.png" width="50px" height="auto" alt="blue arrow"/>
        <img className="door" src={SLC1} width="100px" height="auto" alt={"arrive at "+step[2]}/>
      </div>
    )
  }

  function changeStep(stepList: string[], curr: number, inc: number) {
    console.log(curr)
    
    const newCurr = (curr+inc < stepList.length && curr+inc >= 0) ? curr + inc : curr;
    return newCurr;
  }

  export default DisplaySteps;