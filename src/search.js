import React, { Component } from 'react';
import { Button ,
Navbar,
Form,
Nav,
FormControl,
}
from 'react-bootstrap';
import './search.css';


class Search extends Component {
    keyPress = (e) => {
        if(e.charCode === 13){
            // console.log('fire')
        this.props.handleClick()
    }
    }
    render() {
        return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
            </Nav>
            <Form value="Send Request" inline>
                <FormControl 
                onChange={(e) => this.props.searchUserNameInput(e)} 
                value={this.props.searchUserName} 
                type="text" placeholder="Search Username..." 
                className="mr-sm-2"
                onKeyPress={this.keyPress} />
                <FormControl 
                onChange={(e) => this.props.searchRepoInput(e)} 
                value={this.props.searchRepoName} 
                type="text" placeholder="Search Repository..." 
                className="mr-sm-2"
                onKeyPress={this.keyPress} />
                <Button onClick={() => this.props.handleClick()} variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        )
    }

}

export default Search;