import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './createissue.css';


class Createissue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloaded: true
        }
    }
    render() {
        return (
            <Button className="btn-lg issue-btn" variant="success">Create issue</Button>
        );
    }
}







export default Createissue;