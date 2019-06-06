import React, { Component } from 'react';
import { 
    Button,
    Navbar,
    Form,
    FormControl,
    Nav,
    Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './createissue.css';



class MyVerticallyCenteredModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Issue subject" className="mr-sm-2" />
                        </Form>
                    </Navbar>
                    <h4><input type="text"/></h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
          </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
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
            modalShow: false
        };
    }
    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <Navbar expand="lg" bg="dark" variant="dark">
                <div className="d-flex">
                    <Button className="issue-btn"
                        variant="outline-info"
                        style={{ width: '150px' }}
                        onClick={() => this.setState({ modalShow: true })}
                    >Create issue</Button>
                    <img className="App-logo" src={'img/logo.svg'} alt="logo" />
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