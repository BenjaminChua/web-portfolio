import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import './headerFooter.css'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" fixed="top">
                <Container className="nav-bar-container">
                    <Navbar.Brand href="#home"> BEN </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home"> Home </Nav.Link>
                        <Nav.Link href="#resume"> Resume </Nav.Link>
                        <Nav.Link href="#exchange"> Exchange </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="bg-transparent pt-5 pb-2" />
        </>
    );
};

export default NavBar;