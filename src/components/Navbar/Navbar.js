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
                <Nav.Link href="#home">
                    <i className = "fa fa-home fa-lg"> Home</i>
                </Nav.Link>    
                <Nav.Link href="#about-me">
                    <i className = "fa fa-user fa-lg"> About Me</i>
                </Nav.Link>
                <Nav.Link href="#projects">
                    <i className ="fa fa-laptop fa-lg"> Projects</i>
                </Nav.Link>
                <Nav.Link href="#contact">
                    <i className = "fa fa-envelope fa-lg"> Contact</i>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
