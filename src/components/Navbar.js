import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function NavigationBar() {
    return (
        <Navbar fixed = "top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home" style={{fontWeight:"bold"}}>Linh Dinh</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                <Nav.Link href="#home">Home</Nav.Link>    
                <Nav.Link href="#about-me">About Me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
