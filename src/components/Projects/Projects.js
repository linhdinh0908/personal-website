import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Projects() {
    return (
        <Card style = {{width: '20rem', height:'16rem'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant = "outline-info">See more</Button>
            </Card.Body>
        </Card>
    )
}

export default Projects
