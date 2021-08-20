import React from 'react'
import Button from 'react-bootstrap/Button';

export const ActionBar = () => {
    const analyzeGridAction = async () => {
        await setTimeout(() => {
            console.log(`Analyzed grid...`)
        }, 3000)
    }

    const cleanGridAction = () => {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }




    return (
        <div>
            <Button onClick={analyzeGridAction}>Analayze Grid</Button>
            <Button onClick={cleanGridAction}>Clean Grid</Button>
        </div>
    )
}
