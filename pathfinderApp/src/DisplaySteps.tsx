import { useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map1 from './map1.png';
import SLC1 from './PathfinderAppMaps/Step/SLC1.png';

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

class Map {
  constructor(address: string, alt: string) {
    this.address = address;
    this.alt = alt;
  }
}

const maps = [
  new Map(Map1, "Homebew Map"),
  new Map(SLC1, "1st Floor of SLC")
];

const MapCanvas = (adr: string) => { 
  
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    

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

    const img2 = new Image(300, 300);
    //img2.src = "C:/Users/Mary/pathfinderApp/pathfinderApp" + adr;
    img2.src = maps[1].address;
    img2.width = 300;
    img2.id = "mymap"

    ctx.font = "10px Georgia";
    
    ctx.fillText(adr, 10, 90);
    ctx.fillText("C:/Users/Mary/pathfinderApp/pathfinderApp", 10, 140)
    ctx.fillText(adr.toString(), 10, 190)
    ctx.drawImage(img2, 10, 10);
    ctx.fillRect(200, 200, 50, 50)
    ctx.fillText(img2.src, 10, 50);

  }, []); 

  const image = <img src={adr}  ref={imgRef} />; 

  return (
    <canvas id="display" ref={canvasRef} width="300px" height="250px" />); 
}; 





// Used https://www.w3schools.com/graphics/canvas_intro.asp to learn how to use the canvas tag
// Also https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258 for how to implement
// Used codecademy and Khan academy for general knowledge



function DisplaySteps() {
  
    return (
        <div className="background page">
            {PageHead("Display Screen")}
            {StepDisplay("Location A", "Location B", steps)}
            {MapDisplay(maps[1])}
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
          <p>{map.address}</p>
          
          {MapCanvas(map.address)}
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