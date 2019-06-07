import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Badge, Accordion, Button } from "react-bootstrap";
import moment from "moment";
import MDReactComponent from "markdown-react-js";
import "./issuecard.css";
import { wrap } from "module";
import { RSA_NO_PADDING } from "constants";

class IssueCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloaded: false,
      issue: []
    };
  }

  async getData() {
    const data = await fetch(
      "https://api.github.com/repos/facebook/react/issues"
    );
    const myData = await data.json();
    console.log("data", myData);
    this.setState({ issue: myData });
    console.log("check my datat in console", this.state.issue);
  }

  renderbadges(labels) {
    return labels.map(({ color, name }) => {
      return (
        <>
          <Badge
            pill
            style={{
              backgroundColor: "#" + color
            }}
          >
            {name}
          </Badge>
          <br />
        </>
      );
    });
  }

  renderCard() {
    return this.state.issue.map(
      ({ number, title, body, user, labels, state, created_at }) => {
        console.log("check body", body);
        return (
          <Accordion>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <div className="d-flex">
                  <div className="mr-auto px-5 text-left">
                    <Card.Title>
                      <h4>
                        #{number} {title}
                      </h4>
                    </Card.Title>
                    <Card.Text>
                      <br />
                      Status: {state} // {moment(created_at).fromNow()} since it
                      open!
                    </Card.Text>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Read More!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <div className="markdown">
                        <MDReactComponent text={body} />
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div>
                    <div className="d-block">
                      <div className="ml-auto">
                        <div className="text-right">
                          <Card.Img
                            className="rounded-circle avataimg"
                            variant="top"
                            src={user.avatar_url}
                          />
                          <p>@{user.login}</p>
                        </div>
                      </div>
                      <div
                        style={{
                          clear: "both",
                          textAlign: "right"
                        }}
                      >
                        {this.renderbadges(labels)}
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Accordion>
        );
      }
    );
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return <Container>{this.renderCard()}</Container>;
  }
}

export default IssueCard;
