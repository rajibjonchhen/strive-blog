import React, { Component } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";
export default class NavBar extends Component {
state = {
  author : {}
}

  componentDidMount = () =>{
    this.fetchAuthor()
  }

  fetchAuthor = async() => {
      const url = "http://localhost:3001"
      const response = await fetch(`${url}/authors/me`,{header : { authorization :  localStorage.getItem("token")}})
      if(response.ok) {
        const data = await response.json()
        console.log(data)
        if(data){
          this.setState({author:data})
        }
      }
      
  } 
  render() {
    return (
      <Navbar expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/home">
            <img className="blog-navbar-brand" alt="logo" src={logo} />
          </Navbar.Brand>

          <Button
            as={Link}
            to="/new"
            className="blog-navbar-add-button bg-dark"
            size="lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
            Post Article
          </Button>
        </Container>
      </Navbar>
    );
  }
}
