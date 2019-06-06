import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './search.css';


class Search extends Component {
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
            <p>search page</p>            
        )
    }

}

export default Search;
