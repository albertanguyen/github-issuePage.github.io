import React, { Component } from "react";
import { Button, Navbar, Form, FormControl, Nav, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./createissue.css";

// color theme 282c34, 17a2b8, 1aa2b8

// check = () => {
//   console.log("hello world");
// };

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: "",
      bodyInput: "",
      localObject: {
        number: 1,
        title: "",
        body: "",
        user: "local Team Ultron",
        labels: "",
        state: "open",
        created_at: new Date()
      }
    };
  }

  titleLocal(e) {
    this.setState({ titleInput: e.target.value });
    console.log("check", this.state.titleInput);
  }
  bodyLocal(e) {
    this.setState({ bodyInput: e.target.value });
    console.log("check", this.state.bodyInput);
  }

  addLocalOject = () => {
    const { localObject } = this;
  };

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
                onChange={e => this.titleLocal(e)}
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
              onChange={e => this.bodyLocal(e)}
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
  constructor(props) {
    super(props);
    this.state = {
      isloaded: true,
      modalShow: false
    };
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <Navbar expand="lg" variant="dark">
        <div className="d-flex">
          <Button
            className="issue-btn"
            variant="outline-info"
            style={{ width: "150px", fontSize: "0.7em" }}
            onClick={() => this.setState({ modalShow: true })}
          >
            Create issue
          </Button>
          <img className="App-logo" src={"img/logo.svg"} alt="logo" />
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </div>
      </Navbar>
    );
  }
}

export default Createissue;
