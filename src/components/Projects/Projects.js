import React from 'react'
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'


const CardWrapper = styled.div`
    .card-container{
        width: 18rem;
        height: 16rem;
        margin-left: 25px;
        margin-top: 50px;
        align-content: space-around;
    }
`;

function Projects(props) {
    return (
        <CardWrapper className="card-container">
            <Card className="card-co{ntainer">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Button variant = "outline-info">See more</Button>
                </Card.Body>
            </Card>
        </CardWrapper>
    );
}

export default Projects
