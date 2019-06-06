import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './issuecard.css';


class IssueCard extends Component {
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
            <p>issue card</p>            
        )
    }

}

export default IssueCard;
