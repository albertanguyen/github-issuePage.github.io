import React, { Component } from 'react';
import {
    Button,
    Navbar,
    Form,
    FormControl,
    Nav,
    Modal,
    Card, Badge, Accordion
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './createissue.css';



// color theme 282c34, 17a2b8, 1aa2b8


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
                        <Nav className="mr-auto">
                        </Nav>
                        <Form>
                            <FormControl type="text" placeholder="Issue subject" className="mr-sm-2"
                                onChange={e => this.props.onChangeOne(e)}
                            />
                        </Form>
                    </Navbar>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Describe your issue below</Form.Label>
                        <Form.Control as="textarea" rows="10"
                            onChange={e => this.props.onChangeTwo(e)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#282c34" }}>
                    <Navbar variant="dark">
                        <Button
                            className="mr-auto"
                            variant="outline-info"
                            onClick={
                                () => {
                                    this.props.onHide();
                                    this.props.submitLocal();
                                }
                            }
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
        super(props)
        this.state = {
            isloaded: true,
            modalShow: false,
            titleLocal: "",
            bodyLocal: "",
        };
    }

    titleLocal = e => {
        this.setState({ titleLocal: e.target.value }, () => console.log("title", this.state.titleLocal));
    };

    bodyLocal = e => {
        this.setState({ bodyLocal: e.target.value }, () => console.log("body", this.state.bodyLocal));
    };

    submitLocal = () => {
        console.log("local", this.state.titleLocal)
        this.renderSubmit()
        this.setState({
            titleLocal: this.state.titleLocal,
            bodyLocal: this.state.bodyLocal
        }
        )
    }

    renderSubmit = function () {
        console.log("rendersubmit", this.state.titleLocal)

        return (
            <Accordion>
                <Card>
                    <Card.Body>
                        <div className="d-flex">
                            <div className="mr-auto text-left">
                                <Card.Title>
                                    <h4 style={{ fontSize: 20 }}>
                                        #{this.state.titleLocal}
                                        &nbsp;
                                        </h4>

                                </Card.Title>
                                <Card.Text>
                                    <Accordion.Toggle as={Button} variant="link" style={{ paddingLeft: 0 }}>
                                        Show Body Text
                    </Accordion.Toggle>
                                    <Accordion.Collapse>
                                        {this.state.bodyLocal}
                                    </Accordion.Collapse>
                                </Card.Text>

                            </div>

                        </div>
                    </Card.Body>
                </Card>
            </Accordion>
        )

    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <>
                <Navbar expand="lg" variant="dark">
                    <div className="d-flex">
                        <Button className="issue-btn"
                            variant="outline-info"
                            style={{ width: '150px', fontSize: "0.7em" }}
                            onClick={() => this.setState({ modalShow: true })}
                        >Create issue</Button>
                        <img className="App-logo" src={'img/logo.svg'} alt="logo" />
                        <MyVerticallyCenteredModal
                            show={this.state.modalShow}
                            onHide={modalClose}
                            onChangeOne={e => this.titleLocal(e)}
                            onChangeTwo={e => this.bodyLocal(e)}
                            submitLocal={this.submitLocal}
                        />
                    </div>
                </Navbar>
                <div style={{ backgroundColor: "white", color: "red", width: 200, height: 200 }}>
                    asdsad
        {this.renderSubmit()}
                </div>
            </>
        );
    }
}




export default Createissue;