import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './pagination';
import Search from './search';
import Createissue from './createissue';
import IssueCard from './issuecard';
import RenderNavbar from './navbar';
import { logo } from './logo.svg';
import './App.css';


class githubIssue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchRepoName: '',
            userName: '',
            issueList: [],
            isloaded: false,
            allIssues: []
        }
    }

    // componentDidmount() {

    // }
    searchInput = (e) => {
        this.setState({searchRepoName: e.target.value},console.log(this.state.searchRepoName)
        )
    }

    handleClick = async () => {
        const { searchRepoName } = this.state
        const response = await fetch(`http://api.github.com/repos/facebook/${searchRepoName}/issues`)
        const jsonData = await response.json()
        console.log('Json', jsonData)
        this.setState({
        searchRepoName : ""
        })

      }
    render() {
        return (
            <div className="App">
                <RenderNavbar />
                {/* <Search /> */}
                <div className="App-header container">

                <Search 
                handleClick={this.handleClick}
                  searchInput={(e) => this.searchInput(e)} 
                  searchRepoName={this.state.searchRepoName}/>
                    <img className="App-logo" src={ logo } alt="logo" />
                    <h1 className="text-uppercase">Github issue page</h1>
                    <div className="row">
                        <div className="col-6">
                            <Createissue />
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
