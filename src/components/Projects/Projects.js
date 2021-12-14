import React from 'react'
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'


const CardWrapper = styled.div`
    .card-container{
        width: 20rem;
        height: 28rem;
        margin: auto;
    }
`;

function Projects(props) {
    return (
        <CardWrapper>
            <Card className="card-container">
                <Card.Img variant="top" src={props.image} alt={props.alt} style={{height: '16rem'}}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                   
                    <Button variant = "outline-info" href={props.url}>See more</Button>
                    
                </Card.Body>
            </Card>
        </CardWrapper>
    );
}

export default Projects
