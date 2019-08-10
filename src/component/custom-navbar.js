import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function CustomNavbar() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                alt=""
                src="/assets/img/logo/square.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />
                {' PUComputing'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </Nav>
                {/* <Nav>
                <Nav.Link href="/">Misc</Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
        </Navbar>
    );
}