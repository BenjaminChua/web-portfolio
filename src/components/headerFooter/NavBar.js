import React  from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';

import './headerFooter.css'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" fixed="top">
                <Container className="nav-bar-container">
                    <NavLink className="navbar-brand" to="/#top" exact> BEN </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="nav-link" to="/#top" exact> Home </NavLink>
                        <NavLink className="nav-link" to="/resume#top"> Resume </NavLink>
                        <NavLink className="nav-link" to="/project#top"> Project </NavLink>
                        <NavLink className="nav-link" to="/exchange#top"> Exchange </NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="bg-transparent pt-5 pb-2" id="top"/>
        </>
    );
};

export default NavBar;