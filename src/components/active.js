import React from 'react'
import { Card } from 'react-bootstrap'

function Active({active, setActive, serCompleted}) {
    console.log(active)
    return (
        <div>
            {active.map((x, index) => (
                <Card body key={index}>{x.name}</Card>
            ),1)}
        </div>
 )
}

export default Active