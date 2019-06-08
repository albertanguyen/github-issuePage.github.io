import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Badge, Accordion, Button } from "react-bootstrap";
import moment from "moment";
import MDReactComponent from "markdown-react-js";
import "./issuecard.css";

class IssueCard extends Component {
  renderbadges(labels) {
    return labels.map(({ color, name }) => {
      return (
        <>
          <Badge
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
    return this.props.issue.map(
      ({ number, title, body, user, labels, state, created_at }) => {
        return (
          <Accordion>
            <Card class="issue-card">
              <Card.Body>
                <div className="d-flex">
                  <div className="mr-auto text-left">
                    <Card.Title>
                      <h4 style={{ fontSize: 20 }}>
                        #{number} {title}
                        &nbsp;
                        <Badge
                          style={{
                            fontSize: 12,
                          }}
                          variant={
                            (state === "open")
                              ?
                              "dark"
                              :
                              "secondary"
                          }
                        >
                          {state}
                        </Badge>
                      </h4>
                      <p style={{ fontSize: 9, color: "gray" }}>
                        Created {moment(created_at).fromNow()}
                      </p>
                    </Card.Title>
                    <Card.Text>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ paddingLeft: 0 }}>
                        Show Body Text
                    </Accordion.Toggle>
                      <Accordion.Collapse className="markdown" eventKey="0">
                        <MDReactComponent text={body} />
                      </Accordion.Collapse>
                    </Card.Text>

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

  render() {
    return <Container>{this.renderCard(this.props.issue)}</Container>;
  }
}

export default IssueCard;
