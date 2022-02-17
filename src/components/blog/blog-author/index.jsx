import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles.css";
export default class BlogAuthor extends Component {
  render() {
    const { author, blogId } = this.props;

    return (
      <Row>
        <Col xs={2}>
          <Image className="blog-author" src={author.avatar} roundedCircle />
        </Col>
        <Col>
          <div>by</div>
          <h6>{author.name}</h6>
        </Col>
        <Col>
        <a href={`${process.env.REACT_APP_BE_URL}/blogs/${blogId}/pdf`}>
        </a>
        </Col>
      </Row>
    );
  }
}
