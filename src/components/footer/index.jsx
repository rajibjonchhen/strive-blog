import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer style={{ position:'fixed', bottom:'30px' }}>
        <Container>{`${new Date().getFullYear()} - © Strive School | Developed for homework projects.`}</Container>
      </footer>
    );
  }
}
