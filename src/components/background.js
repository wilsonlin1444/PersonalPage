import React, { useRef, useEffect, useState } from 'react';



export function Background(){
    const canvas = useRef();
    let ctx = null;
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleWindowResize = () => {
          setWindowHeight(window.innerHeight);
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });
    // initialize the canvas context
    useEffect(() => {
        const canvasEle = canvas.current;
        canvasEle.width = window.innerWidth;
        canvasEle.height = window.innerHeight;
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
    }, [window.innerHeight, windowWidth]);
    useEffect(() => {
        //render every 40 millisecond
        const intervalId = setInterval(() => {
            writeText();
        }, 40)
        return () => clearInterval(intervalId);
    }, []);
    // const width = window.innerWidth, height = window.innerHeight;
    // cvs.width = width;
    // cvs.height = height;
    // const ctx = cvs.getContext('2d');
    const columnWidth = 20;
    const columnCount = Math.floor(window.innerWidth / columnWidth);
    const columnNextIndexes = new Array(columnCount);
    columnNextIndexes.fill(1);
    function writeText (){
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
        ctx.font = `${20}px "Roboto Mono"`
        ctx.fillStyle = getRandomColor();
        for(let i = 0; i < columnCount; i++){
            const x = i * columnWidth;
            const y = 20 * columnNextIndexes[i];
            ctx.fillText(getRandomChar(), x,y);
            if (y > window.innerHeight && Math.random() > 0.99){
                columnNextIndexes[i] = 0;
            }
            else{
                columnNextIndexes[i]++;
            }
        }
    }
    function getRandomColor() {
        const fontColors = [
            '#33B5E5',
            '#0099CC',
            '#AA66CC',
            '#9933CC',
            '#669900',
            '#99CC00',
            '#FFBB33',
            '#FF8800',
            '#FF4444'
        ];
        return fontColors[Math.floor(Math.random() * fontColors.length)]
    }
    function getRandomChar() {
        const str = 'wilson';
        return str[Math.floor(Math.random() * str.length)]
    }
    return(
        <div className="App">
            <canvas style={{
            backgroundColor: 'black',
            width : windowWidth,
            height: windowHeight,
            objectFit : 'cover'
          }} ref={canvas}></canvas>
        </div>
    )        
}