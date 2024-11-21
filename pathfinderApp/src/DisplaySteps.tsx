import { useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import DCO from './maps/DCO.png';
import EXPO from './maps/EXPO.png';
import M3O from './maps/M3O.png';
import MC1 from './maps/MC1.png';
import MC2 from './maps/MC2.png';
import MC3 from './maps/MC3.png';
import MCO from './maps/MCO.png';
import QNC1 from './maps/QNC1.png';
import QNCO from './maps/QNCO.png';
import SLC1 from './maps/SLC1.png';

import C2I from './doors/C217 - I.jpg';
import C2O from './doors/C217 - O.jpg';
import EXPOd from './doors/EXP20 - O.jpg';
import M3I from './doors/M318 - I.jpg';
import M3Od from './doors/M318 - O.jpg';
import MCI8 from './doors/MC8 - I.jpg';
import MCO8 from './doors/MC8 - O.jpg';
import MCI10 from './doors/MC10 - I.jpg';
import MCO10 from './doors/MC10 - O.jpg';
import MCI11 from './doors/MC11 - I.jpg';
import MCO11 from './doors/MC11 - O.jpg';
import MCI12 from './doors/MC12 - I.jpeg';
import MCI13 from './doors/MC13 - I.jpg';
import MCO13 from './doors/MC13 - O.jpg';
import MCI14 from './doors/MC14 - I.jpg';
import MCO14 from './doors/MC14 - O.jpg';
import MCI23 from './doors/MC23 - I.jpg';
import MCO23 from './doors/MC23 - O.jpg';
import QNCI15 from './doors/QNC15 - I.jpg';
import QNCO15 from './doors/QNC15 - O.jpg';
import QNCI16 from './doors/QNC16 - I.jpg';
import QNCO16 from './doors/QNC16 - O.jpg';
import QNCO21 from './doors/QNC21 - O.jpg';
import SLCI1 from './doors/SLC1 - I.jpg';
import SLCO1 from './doors/SLC1 - O.jpg';
import SLCI2 from './doors/SLC2 - I.jpg';
import SLCO2 from './doors/SLC2 - O.jpg';
import SLCI3 from './doors/SLC3 - I.jpg';
import SLCO3 from './doors/SLC3 - O.jpg';
import SLCI4 from './doors/SLC4 - I.jpg';
import SLCO4 from './doors/SLC4 - O.jpg';
import SLCI5 from './doors/SLC5 - I.jpg';
import SLCO5 from './doors/SLC5 - O.jpg';
import SLCI6 from './doors/SLC6 - i.jpg';
import SLCO6 from './doors/SLC6 - O.jpg';
import SLCI7 from './doors/SLC7 - I.jpg';
import SLCO7 from './doors/SLC7 - O.jpg';
import SLCI22 from './doors/SLC22 - I.jpg';
import SLCO22 from './doors/SLC22 - O.jpg';

import {pathDic} from './pathDic.tsx';

// https://www.shecodes.io/athena/38751-how-to-import-all-images-of-a-folder-into-a-react-component

// https://stackoverflow.com/questions/48560592/is-it-possible-to-import-a-group-of-images-as-an-array-create-react-app-projec

// https://www.reddit.com/r/typescript/comments/1b8z7lf/is_there_a_less_manual_way_of_loading_a_bunch_of/

// const mapImgs = require.context('../maps', true);
// const mapList = mapImgs.keys().map(image => mapImgs(image))

const searchSteps = (step: any[], goal: number) => {
  for (let i = 0; i < step.length; i++) {
    if (step[i][0] == goal) {
      return step[i]
    }
    else if (step[i][0] > goal) {
      console.log("error")
      return "Error"
    }

  }
}

console.log(pathDic[1][0][2])

const start = "Location A"
const end = "Location B"

const steps = [
  searchSteps(pathDic[4], 2), 
  searchSteps(pathDic[2], 23),
  //searchSteps(pathDic.4, 2),
  //{text: "Step 4", start: SLC1, end: SLC1}
  searchSteps(pathDic[17], 8),
  searchSteps(pathDic[10], 11),
  searchSteps(pathDic[15], 16),
  searchSteps(pathDic[13], 14)
];

class Map {
  constructor(addr: string, alt: string="Image not available") {
    this.addr = addr;
    this.alt = alt;
  }
}

const maps = [
  new Map(DCO, "Outside of DC"),
  new Map(EXPO, "Outside of EXP"),
  new Map(M3O, "Outside of M3"),
  new Map(MC1, "First Floor of MC"),
  new Map(MC2, "Second Floor of MC"),
  new Map(MC3, "Third Floor of MC"),
  new Map(MCO, "Outside of MC"),
  new Map(QNC1, "1st Floor of QNC"),
  new Map(QNCO, "Outside of QNC"),
  new Map(SLC1, "1st Floor of SLC"),
];

const doors = [
  new Map(C2I),
  new Map(C2O),
  new Map(EXPOd),
  new Map(M3I),
  new Map(M3Od),
  new Map(MCI8),
  new Map(MCO8),
  new Map(MCI10),
  new Map(MCO10),
  new Map(MCI11),
  new Map(MCO11),
  new Map(MCI12),
  new Map(MCI13),
  new Map(MCO13),
  new Map(MCI14),
  new Map(MCO14),
  new Map(MCI23),
  new Map(MCO23),
  new Map(QNCI15),
  new Map(QNCO15),
  new Map(QNCI16),
  new Map(QNCO16),
  new Map(QNCO21),
  new Map(SLCI1),
  new Map(SLCO1),
  new Map(SLCI2),
  new Map(SLCO2),
  new Map(SLCI3),
  new Map(SLCO3),
  new Map(SLCI4),
  new Map(SLCO4),
  new Map(SLCI5),
  new Map(SLCO5),
  new Map(SLCI6),
  new Map(SLCO6),
  new Map(SLCI7),
  new Map(SLCO7),
  new Map(SLCI22),
  new Map(SLCO22)
]

const getMapAddress = (address: string, lst: Map[]) => {
  let out
  // https://www.shecodes.io/athena/81408-what-does-undefined-mean-in-javascript
  for (let i = 0; i < lst.length; i++) {
    if (lst[i].addr !== undefined) {
      if (lst[i].addr == address) {
        out = lst[i].addr
        console.log("door")
      }
    }
    
  }
  return out
}

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
    //https://www.w3schools.com/jsref/canvas_clearrect.asp
    ctx.clearRect(0, 0, 300, 225)

    // https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_drawimage
    //const image = <img src={adr} ref={imgRef} />
    //const currImg = imgRef.current;

    //ctx.drawImage(image, 0, 0, 500, 500);
    
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

    
    

    
    //ctx.fillText("C:/Users/Mary/pathfinderApp/pathfinderApp", 10, 140)
    //ctx.fillText(adr.toString(), 10, 190)
    //ctx.drawImage(img2, 10, 10);
    //ctx.fillRect(200, 200, 50, 50)
    //ctx.fillText(img2.src, 10, 50);
    // https://www.w3schools.com/graphics/canvas_lines.asp
    /*ctx.beginPath();
    ctx.moveTo(285, 50)
    ctx.lineTo(183, 50);
    ctx.arc(158, 45, 25, (Math.PI)/12, 5*Math.PI/6, false) // https://www.w3schools.com/graphics/canvas_circles.asp
    ctx.lineTo(127, 62)
    ctx.lineTo(120, 56)
    ctx.lineWidth = 2;
    ctx.stroke(); */

    ctx.font = "bold 14px Georgia";
    ctx.fillStyle='#2200aa';
    //https://www.w3schools.com/tags/canvas_font.asp

    if (adr.substring(10, 14) == "SLC1") {
      ctx.fillText("4", 290, 55); // Ring Road Door
      ctx.fillText("2", 110, 60) // MC Ground Floor Door
      ctx.fillText("5", 237, 127) // Turnkey Desk Door
      ctx.fillText("6", 178, 122) // Cafeteria Door
      ctx.fillText("7", 115, 130) // PAC Door
      ctx.fillText("1", 75, 90) // SLC Green Door
      ctx.fillText("3", 180, 10) // QNC Door
    } else if (adr.substring(10, 13) == "MC1") {
      ctx.fillText("9", 40, 70) // M3 Basement Door
      ctx.fillText("8", 230, 20) // C2 Basement Door
    } else if (adr.substring(10, 13) == "MC2") {
      ctx.fillText("11", 235, 183) // QNC Door
      ctx.fillText("23", 62, 182) // SLC Door
      ctx.fillText("10", 40, 30) // M3 Second Floor Door
      ctx.fillText("12", 270, 95) //  Peter Russell Garden Door
    } else if (adr.substring(10, 13) == "MC3") {
      ctx.fillText("13", 30, 180) // SLC Tunnel Door
      ctx.fillText("14", 230, 180) // QNC Tunnel Door
    } else if (adr.substring(10, 14) == "QNC1") {
      ctx.fillText("15", 95, 15) // SLC Path Door
      ctx.fillText("16", 235, 45) // MC Door
    }
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



function DisplaySteps(nav) {
  const [current, setCurr] = useState(0)
    //https://www.shecodes.io/athena/10997-how-to-add-an-onclick-event-in-react
    //https://legacy.reactjs.org/docs/hooks-state.html
    return (
        <div className="background page">
            {PageHead("Display Screen", nav)}
            <h2>{start} to {end}</h2>
            <div className="step box">
              <button onClick={() => setCurr(changeStep(steps, current, -1))} className='left'>Back</button>
              <h3>{current+1}. {steps[current][2].substring(0, steps[current][2].length-4)
                //https://www.w3schools.com/jsref/jsref_substring.asp
                } {steps[current][0]}</h3>
              <button onClick={() => setCurr(changeStep(steps, current, 1))} className='right'>Next</button>
              {StepBox(steps[current])}
            </div>
            <div className="map box">
              {MapCanvas("/src/maps/"+steps[current][2])}
              

            </div>
        </div>
    )
  }
  
  function PageHead(title: string, nav) { 
    
    return (
        <div className="head box">
          <button onClick={() => nav("home")} className='homelink'><h2>Pathfinder App</h2></button>
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
    let leave = getMapAddress('./doors/'+step[3][0], doors)
    let arrive = getMapAddress('./doors/'+step[3][1], doors)
    console.log('./doors/'+step[3][0])
    console.log(doors[26].addr)
    console.log(arrive)

    return (
      <div className='doors'>
        <img className="door" src={leave} width="100px" height="auto" alt={"leave from "+step[3][0]}/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Arrow-v2.png" width="50px" height="auto" alt="blue arrow"/>
        <img className="door" src={arrive} width="100px" height="auto" alt={"arrive at "+step[3][1]}/>
      </div>
    )
  }

  function changeStep(stepList: string[], curr: number, inc: number) {
    console.log(curr)
    
    const newCurr = (curr+inc < stepList.length && curr+inc >= 0) ? curr + inc : curr;
    return newCurr;
  }

  export default DisplaySteps;