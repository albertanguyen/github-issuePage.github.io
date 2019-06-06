import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './pagination';
import Search from './search';
import Createissue from './createissue';
import IssueCard from './issuecard';
import './App.css';


class githubIssue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repoName: '',
            userName: '',
            issueList: [],
            isloaded: false,
            allIssues: []
        }
    }

    // componentDidmount() {

    // }

    render() {
        return (
            <div className="App">
                {/* {navbar here} */}
                <div className="App-header container">
                    <h1 className="text-uppercase">Github issue page</h1>
                    <div className="row">
                        <div className="col-6">
                            <Createissue />
                            </div>                        
                        <div className="col-12">
                            {/* {your search field here} */}
                        </div>
                    </div>
                </div>
                <div className="App-body container">
                    <div className="row d-flex justify-content-center">
                    {/* {your cards here} */}
                    </div>
                </div>
                <div className="App-footer">
                </div>
            </div>
            )
    }

}

export default githubIssue;
