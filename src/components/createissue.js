import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
        Button, 
        Navbar, 
        } from "react-bootstrap";
import MyVerticallyCenteredModal from './verticalmodal';
import "../css/App.css";
import "../css/createissue.css";


class Createissue extends Component {
  constructor() {
    super();
    this.state = {
      isloaded: true,
      modalShow: false,
      title: "",
      body: ""
    };
  }

  titleLocal(e) {
    this.setState({ title: e.target.value });
  }

  bodyLocal(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    let modalClose = () => {
      const obj = {
        number: parseInt(this.props.getIssue[0].number) + 1,
        title: this.state.title,
        body: this.state.body,
        user:
        {
          avatar_url: "https://www.pngfind.com/pngs/m/70-702149_ultron-marvel-ultron-logo-hd-png-download.png",
          login: "teamultron",
        },
        labels: [
          {
            "name": "Pro",
            "color": "fbca04",
          }
        ],
        state: "open",
        created_at: new Date()
      };

      if (obj.title === "" || obj.title.length < 3) {
        this.setState({ modalShow: false });
        return alert("You need at least a title")

      } else {
        this.setState({ modalShow: false });
        this.props.getObj(obj);
      }
    };

    return (
      <Navbar variant="dark">
        <div className="d-flex">
          <Button
            className="issue-btn"
            variant="outline-info"
            style={{ width: "150px", fontSize: "1.25em" }}
            onClick={() => this.setState({ modalShow: true })}
          >
            Create Issue
          </Button>
          <img className="App-logo" src={"img/logo.svg"} alt="logo" />
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
            checkTitle={e => this.titleLocal(e)}
            checkBody={e => this.bodyLocal(e)}
          />
        </div>
      </Navbar>
    );
  }
}

export default Createissue;