import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
        Button, 
        Navbar, 
        Form, 
        FormControl, 
        Nav, 
        Modal 
        } from "react-bootstrap";
import "../css/App.css";
import "../css/createissue.css";

class MyVerticallyCenteredModal extends Component {
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

export default MyVerticallyCenteredModal;