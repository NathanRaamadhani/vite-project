import React from 'react';
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { usePocket } from '../../contexts/PocketContexts';


const Header = () => {
    const {logout} = usePocket();
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home">Simple Apps</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <button onClick={(e) => {
                e.preventDefault()
                logout()
            }}>Logout</button>
    
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header