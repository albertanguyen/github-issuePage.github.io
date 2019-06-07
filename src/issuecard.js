import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Badge } from "react-bootstrap";
import moment from "moment";
import MDReactComponent from "markdown-react-js";
import "./issuecard.css";

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
        <Badge
          pill
          style={{
            backgroundColor: "#" + color
          }}
        >
          {name}
        </Badge>
      );
    });
  }

  renderCard() {
    return this.state.issue.map(
      ({ number, title, body, user, labels, state, created_at }) => {
        console.log("check body", body);
        return (
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
                    {" "}
                    Status: {state} {moment(created_at).fromNow()}
                  </Card.Text>
                  <div>
                    <MDReactComponent text={body} />
                  </div>
                </div>
                <div className="ml-auto">
                  <Card.Img
                    className="rounded-circle"
                    variant="top"
                    src={user.avatar_url}
                  />
                  <p className="text-center">{user.login}</p>
                  <div className="text-center">{this.renderbadges(labels)}</div>
                </div>
              </div>
            </Card.Body>
          </Card>
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
