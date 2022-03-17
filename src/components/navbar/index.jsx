import React, { Component, useEffect, useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./styles.css";

const myNavigator = ( {defaultValue,key})  => {
  const [parameter,setParameter]=useState(defaultValue)
  useEffect(()=>{
      const location = useLocation()
        console.log(location.pathname)
          setParameter(location.pathname)
  },[window.location.search])

  return parameter
}

export default class NavBar extends Component {
state = {
  author : {}
}

  componentDidMount = () =>{
    setTimeout(() => {this.fetchAuthor()},200 )
    
  }

  fetchAuthor = async() => {
      const url = "http://localhost:3001"
      const response = await fetch(`${url}/authors/me`,{headers : { authorization :  localStorage.getItem("token")}})
      if(response.ok) {
        const data = await response.json()
        if(data){
          this.setState({author:data})
        }
      }
      
  } 
  render() {
    const { navigate } = this.props
    return (
      <Navbar expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/home">
            <img className="blog-navbar-brand" alt="logo" src={logo} />
          </Navbar.Brand>
          
          <div style={{display:myNavigator === "http://localhost:3000/"? "none":"block"}}>
            <div className='d-flex align-items-center' >
              <img style={{width:'30px'}} src={ "https://www.pavilionweb.com/wp-content/uploads/2017/03/man.png"} alt='user profile' />
                <span className='m-2'>{this.state.author && this.state.author.name}</span>
                <Button
                  as={Link}
                  to="/new"
                  className="blog-navbar-add-button bg-dark m-2"
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
                <Button  className="bg-dark m-2" size="lg" onClick = {() => {navigate("/")}}>Log out</Button>
                </div>
              </div>
        </Container>
      </Navbar>
    );
  }
}
