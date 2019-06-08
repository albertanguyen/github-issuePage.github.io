import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { Navbar, Nav, NavDropdown, Spinner } from 'react-bootstrap';

function RenderNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="light">
            <Navbar.Brand href="#">
                <Spinner animation="grow" role="status" variant="light">
                    <img
                        alt="logo"
                        src="https://library.kissclipart.com/20181116/tq/kissclipart-github-octocat-clipart-github-inc-d75c5e491a5ca190.jpg"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />
                </Spinner>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{ textAlign: "center" }}>
                <Nav>
                    <Nav.Link>Pull request</Nav.Link>
                    <Nav.Link>Issues</Nav.Link>
                    <Nav.Link>Marketplace</Nav.Link>
                    <Nav.Link>Explore</Nav.Link>
                </Nav>
                <NavDropdown title=
                    {
                        <img
                            src="https://www.pngfind.com/pngs/m/70-702149_ultron-marvel-ultron-logo-hd-png-download.png"
                            alt="logo"
                            width="35"
                            height="35"
                        />
                    }
                    id="basic-nav-dropdown"
                    className="ml-auto">
                    <NavDropdown.Item>Your profile</NavDropdown.Item>
                    <NavDropdown.Item>Your repositories</NavDropdown.Item>
                    <NavDropdown.Item>Your projects</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Signout</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default RenderNavbar