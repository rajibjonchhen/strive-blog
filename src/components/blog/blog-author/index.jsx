import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles.css";
export default class BlogAuthor extends Component {
  render() {
    const { name, avatar, id } = this.props;

    return (
      <Row>
        <Col xs={2}>
          <Image className="blog-author" src="{avatar}" roundedCircle />
        </Col>
        <Col>
          <div>by</div>
          <h6>{name}</h6>
          <h6>{id}</h6>
        </Col>
        <Col>
        <button type="button" className="bg-warning text-white">Download</button>
        </Col>
      </Row>
    );
  }
}
