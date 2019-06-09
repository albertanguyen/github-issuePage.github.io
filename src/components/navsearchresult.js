import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Spinner } from 'react-bootstrap';

class RenderNavSearchResult extends React.Component {

    keyPress = (e) => {
        if (e.charCode === 13) {
            this.props.handleClick()
        }
    }
    render() {
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
                <Form value="Send Request" inline className="ml-auto order-0 order-md-1">
                    <FormControl
                        onChange={(e) => this.props.searchUserNameInput(e)}
                        value={this.props.searchUserName}
                        type="text" placeholder="Search Username..."
                        className="mr-2"
                        style={{ width: '6rem' }}
                        onKeyPress={this.keyPress} />
                    <FormControl
                        onChange={(e) => this.props.searchRepoInput(e)}
                        value={this.props.searchRepoName}
                        type="text" placeholder="Search Repository..."
                        className="mr-2"
                        style={{ width: '6rem' }}
                        onKeyPress={this.keyPress} />
                    <Button onClick={() => this.props.handleClick()} variant="outline-info">Search</Button>
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto order-2" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{ textAlign: "center" }}>
                    <Nav className="order-1 order-md-0">
                        <Nav.Link>Pull request</Nav.Link>
                        <Nav.Link>Issues</Nav.Link>
                        <Nav.Link>Marketplace</Nav.Link>
                        <Nav.Link>Explore</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
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
                    className="d-none d-lg-block order-md-2"
                >
                    <NavDropdown.Item>Your profile</NavDropdown.Item>
                    <NavDropdown.Item>Your repositories</NavDropdown.Item>
                    <NavDropdown.Item>Your projects</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Signout</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        )
    }
}

export default RenderNavSearchResult