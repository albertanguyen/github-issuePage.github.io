import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderPagination from "./pagination";
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
      currentPage: 1,
      lastPage: 1,
      isSearch: false,
    };
  }

  searchRepoInput = e => {
    this.setState({ searchRepoName: e.target.value });
  };

  searchUserNameInput = e => {
    this.setState({ searchUserName: e.target.value });
  };

  handleClick = async () => {
    const { searchRepoName, searchUserName, currentPage, isSearch } = this.state;

    let rawString1;
    let rawString4;

    let response = await fetch(
      `http://api.github.com/repos/${searchUserName}/${searchRepoName}/issues?page=${currentPage}`
    );

    let jsonData = await response.json();

    if (jsonData.message !== "Not Found") {

      rawString1 = response.headers.get("link")

      if (rawString1 === null) {
        this.setState({
          lastPage: 1,
          currentPage: 1,
          isSearch: true,
        })
      } else {
        let rawString2 = rawString1.substr(rawString1.length - 20, rawString1.legnth)
        let rawString3 = rawString2.replace('>; rel="last"', "")
        rawString4 = rawString3.replace('page=', "")

        this.setState({
          issueList: jsonData,
          lastPage: parseInt(rawString4),
          currentPage: 1,
          isSearch: true,
        });
      }

    }

    if (jsonData.message === "Not Found") {
      response = await fetch(
        `https://api.github.com/search/issues?q=${searchUserName}/${searchRepoName}?page=${currentPage}`
      );
      jsonData = await response.json();

      rawString1 = response.headers.get("link")

      if (rawString1 === null) {
        this.setState({
          lastPage: 1,
          currentPage: 1,
          isSearch: true,
        })
      } else {
        let rawString2 = rawString1.substr(rawString1.length - 20, rawString1.legnth)
        let rawString3 = rawString2.replace('>; rel="last"', "")
        rawString4 = rawString3.replace('page=', "")

        this.setState({
          issueList: jsonData.items,
          lastPage: parseInt(rawString4),
          currentPage: 1,
          isSearch: true,
        });
      }
    }
  };

  handleClickForPagination = async () => {
    const { searchRepoName, searchUserName, currentPage } = this.state;

    let response = await fetch(
      `http://api.github.com/repos/${searchUserName}/${searchRepoName}/issues?page=${currentPage}`
    );

    let jsonData = await response.json();

    if (jsonData.message !== "Not Found") {
      this.setState({
        issueList: jsonData,
      });
    }

    if (jsonData.message === "Not Found") {
      response = await fetch(
        `https://api.github.com/search/issues?q=${searchUserName}/${searchRepoName}?page=${currentPage}`
      );
      jsonData = await response.json();
      this.setState({
        issueList: jsonData.items,
      });
    }
  }

  handlePageChange = (page, e) => {
    this.handleClickForPagination()
    this.setState({
      currentPage: page,
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
            <RenderPagination
              currentPage={this.state.currentPage}
              issue={this.props.issueList}
              lastPage={this.state.lastPage}
              onPageChange={(page) => this.handlePageChange(page)}
            />
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
