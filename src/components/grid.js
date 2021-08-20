
import React from 'react'
import { useState, useRef } from 'react'

export const Grid = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const startDrawing = (e) => {
        setIsDrawing(true)
        setX(e.nativeEvent.offsetX);
        setY(e.nativeEvent.offsetY);
        console.log('Start drawing!')
    }

    const stopDrawing = (e) => {
        if(isDrawing){
            draw(x, y, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
            setIsDrawing(false)
            setX(0);
            setY(0);
            console.log('Stop drawing!')
        }
    }

    const onMouseMove = (e) => {
        if(isDrawing){
            draw(x, y, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
            setX(e.nativeEvent.offsetX);
            setY(e.nativeEvent.offsetY);
        }
    }

    const draw = (x1, y1, x2, y2) => {
        const ctx = document.getElementById('canvas').getContext('2d');
        ctx.beginPath()
        ctx.strokeStyle='white'
        ctx.lineWidth = 10;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath()
        console.log(`${x2}, ${y2}`)
    }

    return (
        <div>
            <canvas 
            id="canvas" 
            width="500"
            height="500"
            style={{backgroundColor: 'black'}}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={onMouseMove}
            onClick={(e) => {console.log(`${e.nativeEvent.offsetY}`)}}
            ></canvas>
        </div>
    )
}
