import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export const NavBar = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Acme Inc.</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">Admin</NavItem>
        </Nav>
    </Navbar>
);
