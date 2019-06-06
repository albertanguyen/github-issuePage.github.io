import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagination.css';


class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloaded: false
        }
    }

    // componentDidmount() {

    // }

    render() {
        return (
            <p>pagination component</p>            
        )
    }

}

export default Pagination;
