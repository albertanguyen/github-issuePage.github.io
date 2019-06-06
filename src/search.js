import React, { Component } from 'react';
import { Button ,
Navbar,
Form,
Nav,
FormControl,
}
from 'react-bootstrap';
import './search.css';


const Search = (props) => {
        return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <FormControl onChange={(e) => props.searchInput(e)} value={props.searchRepoName} type="text" placeholder="Search Repository..." className="mr-sm-2" />
                <Button onClick={() => props.handleClick()} variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        )
    }



export default Search;
