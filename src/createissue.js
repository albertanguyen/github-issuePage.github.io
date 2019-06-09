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
                onChange={this.props.checktitle}
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
              onChange={this.props.checkboduy}
              onSubmit={e=>console.log('Sumbit form')}
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
    console.log("check");
  }
  bodyLocal(e) {
    this.setState({ body: e.target.value });
    console.log("check");
  }
  keyPressTwo = (e) => {
    if(e.charCode === 13) {
      e.preventDefault()
      console.log('fire')
      this.modalClose()
      // this.props.handleEnter()
    }
  }

  modalClose = () => {
    console.log('shssi modalClose')
    const obj = {
      number: 1,
      title: this.state.title,
      body: this.state.body,
      user: "localPostIssue",
      labels: [],
      state: "open",
      created_at: new Date()
    };
    console.log("check", obj);
    this.setState({ modalShow: false });
    this.props.getObj(obj);
    // console.log("check", this.props.getObj);
   
  };


  render() {

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
            onHide={this.modalClose}
            checktitle={e => this.titleLocal(e)}
            checkboduy={e => this.bodyLocal(e)}
            onKeyPress={this.keyPressTwo}
          />
        </div>
      </Navbar>
    );
  }
}

export default Createissue;