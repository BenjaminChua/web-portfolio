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
                        <a className="navbar-brand" href={this.context.mainPath}> BEN </a>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink className="nav-link" to={this.context.aboutMeMainPath} activeClassName="selected" smooth> About Me </NavLink>
                                <NavLink className="nav-link" to={this.context.educationMainPath} activeClassName="selected" smooth> Education </NavLink>
                                <NavLink className="nav-link" to={this.context.experienceMainPath} activeClassName="selected" smooth> Experience </NavLink>
                                <NavLink className="nav-link" to={this.context.projectsMainPath} activeClassName="selected" smooth> Projects </NavLink>
                                <NavLink className="nav-link" to={this.context.exchangeMainPath} activeClassName="selected" smooth> Exchange </NavLink>
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