import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./pagination";
import Search from "./search";
import Createissue from "./createissue";
import IssueCard from "./issuecard";
import RenderNavbar from "./navbar";
import RenderFooter from "./footer";
import "./App.css";

class githubIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchRepoName: "",
      searchUserName: "",
      issueList: [],
      isloaded: false,
      allIssues: []
    };
  }

  searchRepoInput = e => {
    this.setState({ searchRepoName: e.target.value });
  };

  searchUserNameInput = e => {
    this.setState({ searchUserName: e.target.value });
  };

  handleClick = async () => {
    const { searchRepoName, searchUserName } = this.state;
    let response = await fetch(
      `http://api.github.com/repos/${searchUserName}/${searchRepoName}/issues`
    );
    let jsonData = await response.json();
    if (jsonData.message === "Not Found" || null) {
      response = await fetch(
        `https://api.github.com/search/issues?q=${searchUserName}/${searchRepoName}`
      );
      jsonData = await response.json();
    }
    this.setState({
      searchRepoName: "",
      searchUserName: "",
      issuesList: jsonData
    });
  };
  render() {
    return (
      <div className="App">
        <RenderNavbar />
        <div className="App-header container">
          <h1 className="text-uppercase">Github issue page</h1>
          <Search
            handleClick={this.handleClick}
            searchRepoInput={e => this.searchRepoInput(e)}
            searchUserNameInput={e => this.searchUserNameInput(e)}
            searchUserName={this.state.searchUserName}
            searchRepoName={this.state.searchRepoName}
          />
          <div className="row">
            <div className="col-6">
              <Createissue />
            </div>
            <div className="col-12">{/* {your search field here} */}</div>
          </div>
        </div>
        <div className="App-body container">
          <div className="row d-flex justify-content-center">
            <IssueCard issue={this.state.issueList} />
          </div>
        </div>
        <div className="App-footer">
          <RenderFooter />
        </div>
      </div>
    );
  }
}

export default githubIssue;
