import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './pagination';
import Search from './search';
import IssueCard from './issuecard';
import { logo } from './logo.svg';
import './App.css';


class githubIssue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            issue: [],
            isloaded: false,
            allIssues: []
        }
    }

    // componentDidmount() {

    // }
    searchInput = (e) => {
        this.setState({search: e.target.value})
    }
    
    render() {
        return (
            <div className="App">
                <Search />
                <div className="App-header">
                    <Search />
                    <img className="App-logo" src={logo} alt="logo" />
                    <h1 className="text-uppercase">Github issue page</h1>
                </div>
                <div className="App-body container">
                    <div className="row d-flex justify-content-center">
                    </div>
                </div>
                <div className="App-footer">
                </div>
            </div>
        )
    }

}

export default githubIssue;
