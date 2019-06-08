import React, { Component } from "react";
import { Button, Navbar, Form, FormControl, Nav, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./createissue.css";

class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ backgroundColor: "#282c34" }} closeButton>
          <Navbar variant="dark">
            <Nav className="mr-auto" />
            <Form inline>
              <FormControl
                onChange={this.props.checkTitle}
                type="text"
                placeholder="Issue subject"
                className="mr-sm-2"
              />
            </Form>
          </Navbar>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Describe your issue below</Form.Label>
            <Form.Control
              onChange={this.props.checkBody}
              as="textarea"
              rows="10"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#282c34" }}>
          <Navbar variant="dark">
            <Button
              className="mr-auto"
              onClick={this.props.onHide}
              variant="outline-info"
            >
              Submit issue
            </Button>
          </Navbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

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
      this.setState({ modalShow: false });
      this.props.getObj(obj);
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