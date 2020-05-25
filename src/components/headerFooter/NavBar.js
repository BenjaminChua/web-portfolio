import React  from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './headerFooter.css'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" fixed="top">
                <Container className="nav-bar-container">
                    <Navbar.Brand href="#"> BEN </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="nav-link" to="/home" id="/home"> Home </NavLink>
                        <NavLink className="nav-link" to="/resume" id="/resume"> Resume </NavLink>
                        <NavLink className="nav-link" to="/project" id="/project"> Project </NavLink>
                        <NavLink className="nav-link" to="/exchange" id="/exchange"> Exchange </NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="bg-transparent pt-5 pb-2" />
        </>
    );
};

export default NavBar;