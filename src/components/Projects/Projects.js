import React from 'react'
import { Card, Button } from 'react-bootstrap';
import "./Projects.css";
import 'bootstrap/dist/css/bootstrap.min.css'



function Projects(props) { 
    return (
            <Card className="card text-center shadow">
                <div className="overflow">
                    <Card.Img className="card-image" variant="top" src={props.image} alt={props.alt} style={{height: '16rem'}}/>
                </div>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Button variant = "outline-info" href={props.url}>See more</Button>
                </Card.Body>
            </Card>
    );
}

export default Projects
