import React  from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import pathContext from '../../contexts/pathContext';

import './headerFooter.css'

class NavBar extends React.Component {
    static contextType = pathContext;
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" fixed="top">
                    <Container className="nav-bar-container">
                        <NavLink className="navbar-brand" to={this.context.mainPath} exact> BEN </NavLink>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink className="nav-link" to={this.context.mainPath} exact> Home </NavLink>
                                <NavLink className="nav-link" to={this.context.resumePath}> Resume </NavLink>
                                <NavLink className="nav-link" to={this.context.exchangePath}> Exchange </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="bg-transparent pt-5 pb-2" id="top"/>
            </>
        );
    }
}

export default NavBar;