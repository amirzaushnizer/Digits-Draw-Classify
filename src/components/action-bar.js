import React from 'react'
import Button from 'react-bootstrap/Button';

export const ActionBar = () => {
    const analyzeGridAction = async () => {
        await setTimeout(() => {
            console.log(`Analyzed grid...`)
        }, 3000)
    }

    const cleanGridAction = () => {
        console.log(`Cleaning grid...`)
    }




    return (
        <div>
            <Button onClick={analyzeGridAction}>Analayze Grid</Button>
            <Button onClick={cleanGridAction}>Clean Grid</Button>
        </div>
    )
}
