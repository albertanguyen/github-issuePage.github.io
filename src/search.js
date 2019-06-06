import React, { Component } from 'react';
import { Button ,
Navbar,
Form,
Nav,
FormControl,
}
from 'react-bootstrap';
import './search.css';

const handleChange = () => {
    
}
const handleClick = () => {
}
function Search () {

        return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <FormControl onChange={this.props.search} type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick={handleClick} variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        )
    }


export default Search;
