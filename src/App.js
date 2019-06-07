import React, { Component } from 'react';
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
            searchRepoName: '',
            searchUserName: '',
            issueList: [],
            isloaded: false,
            allIssues: [],
        }
    }

    searchRepoInput = (e) => {
        this.setState({searchRepoName: e.target.value}
        )
    }

    searchUserNameInput = (e) => {
        this.setState({searchUserName: e.target.value}
        )
    }

    handleClick = async () => {
        const { searchRepoName, searchUserName } = this.state
        let response = await fetch(`http://api.github.com/repos/${searchUserName}/${searchRepoName}/issues`)
        let jsonData = await response.json()
        if (jsonData.message === "Not Found" || null) {
            response = await fetch(`https://api.github.com/search/issues?q=${searchUserName}/${searchRepoName}`)
            jsonData = await response.json()
        }
        this.setState({
        searchRepoName : "",
        searchUserName: ""
        })

      }
    render() {
        return (
            <div className="App">
                {/* <Search /> */}
                <div className="App-header container">

                <Search 
                handleClick={this.handleClick}
                  searchRepoInput={(e) => this.searchRepoInput(e)}
                  searchUserNameInput={(e) => this.searchUserNameInput(e)}
                  searchUserName={this.state.searchUserName} 
                  searchRepoName={this.state.searchRepoName}/>
                    <img className="App-logo" src={ logo } alt="logo" />
                    <h1 className="text-uppercase">Github issue page</h1>
                    <div className="row">
                        <div className="col-6">
                            {/* {your create issue here} */}
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