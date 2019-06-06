import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './createissue';
import 'bootstrap/dist/css/bootstrap.min.css';



class Createissue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloaded: true
        }
    }
    render() {
        return (
            <Button variant="success">Create issue</Button>
        );
    }
}







export default Createissue;