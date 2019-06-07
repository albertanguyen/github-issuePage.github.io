import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderPagination from "./pagination";
import Search from "./search";
import Createissue from "./createissue";
import IssueCard from "./issuecard";
import RenderNavbar from "./navbar";
import RenderFooter from "./footer";
import "./App.css";
import Pagination from 'react-paginating';


class githubIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchRepoName: "",
      searchUserName: "",
      issueList: [],
      isloaded: false,
      allIssues: [],
      currentPage: 1,
      lastPage: 1,
    };
  }

  searchRepoInput = e => {
    this.setState({ searchRepoName: e.target.value });
  };

  searchUserNameInput = e => {
    this.setState({ searchUserName: e.target.value });
  };

  handleClick = async () => {
    const { searchRepoName, searchUserName, currentPage } = this.state;
    let rawString1;

    let response = await fetch(
      `http://api.github.com/repos/${searchUserName}/${searchRepoName}/issues?page=1`
    );
    let jsonData = await response.json();
    console.log("Json Data 1", jsonData);
    if (jsonData.message === "Not Found") {
      response = await fetch(
        `https://api.github.com/search/issues?q=${searchUserName}/${searchRepoName}?page=1`
      );
      jsonData = await response.json();
      console.log("Json data 2", jsonData.total_count);

      // } else if (jsonData.message === "Not found") {

      //     console.log("json data 3", jsonData)
      //     alert('Repository does not exist')\
      rawString1 = response.headers.get("link")
    }

    rawString1 = response.headers.get("link")

    if (rawString1 === null) {
      this.setState({
        lastPage: 1,
      })
    }
    let rawString2 = rawString1.substr(rawString1.length - 20, rawString1.legnth)
    let rawString3 = rawString2.replace('>; rel="last"', "")
    let rawString4 = rawString3.replace('page=', "")

    this.setState({
      issueList: jsonData,
      lastPage: parseInt(rawString4)
    });
  };

  handleClickForPagination = async () => {
    const { searchRepoName, searchUserName, currentPage } = this.state
    let response = await fetch(`http://api.github.com/repos/${searchUserName}/${searchRepoName}/issues?page=${currentPage}`)
    let jsonData = await response.json()
    if (jsonData.message === "Not Found" || null) {
      response = await fetch(`https://api.github.com/search/issues?q=${searchUserName}/${searchRepoName}?page=${currentPage}`)
      jsonData = await response.json()
    }
    this.setState({
      issueList: jsonData,
    })
  }

  handlePageChange = (page, e) => {
    console.log(page)
    this.handleClickForPagination()
    this.setState({
      currentPage: page,
    });
  };

  render() {
    console.log("isselisdadasdsa",this.state.issueList)
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
            {/* {isSearched && <IssueCard issue={this.state.issueList} />} */}
            <IssueCard issue={this.state.issueList} />
            {/* <RenderPagination 
            currentPage={this.state.currentPage}
            issue={this.props.issueList}
            lastPage={this.state.lastPage}
            onPageChange={(page) => this.handlePageChange(page)}
            /> */}

<Pagination
                total={this.props.lastPage * 30}
                limit={30}
                pageCount={5}
                currentPage={this.props.currentPage}
            >
                {({
                    pages,
                    currentPage,
                    hasNextPage,
                    hasPreviousPage,
                    previousPage,
                    nextPage,
                    totalPages,
                    getPageItemProps
                }) => (
                        <div>
                            <button
                                {...getPageItemProps({
                                    pageValue: 1,
                                    onPageChange: this.props.onPageChange
                                })}
                            >
                                first
                                    </button>

                            {hasPreviousPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: this.props.onPageChange
                                    })}
                                >
                                    {'<'}
                                </button>
                            )}

                            {pages.map(page => {
                                let activePage = null;
                                if (currentPage === page) {
                                    activePage = { backgroundColor: '#fdce09' };
                                }
                                return (
                                    <button
                                        {...getPageItemProps({
                                            pageValue: page,
                                            key: page,
                                            style: activePage,
                                            onPageChange: this.props.onPageChange
                                        })}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            {hasNextPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: nextPage,
                                        onPageChange: this.props.onPageChange
                                    })}
                                >
                                    {'>'}
                                </button>
                            )}

                            <button
                                {...getPageItemProps({
                                    pageValue: totalPages,
                                    onPageChange: this.props.onPageChange
                                })}
                            >
                                last
              </button>
                        </div>
                    )}
            </Pagination>
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
