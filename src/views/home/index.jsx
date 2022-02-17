import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";

const Home = ({author, setAuthor}) => {
  
const params = useParams
  
  useEffect(() =>{
    let id = params.id
    console.log(id )
    fetchAuthor(id)
  },[])

  const fetchAuthor = async(id) => {
      const url = "http://localhost:3001"
      
      const response = await fetch(`${url}/authors/${id}`)
      if(response.ok) {
        const data = await response.json()
        console.log(data)
        if(data){
          setAuthor(data)
        }
      }
      
  } 

    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        {author && <BlogList author={author}/>}
      </Container>
    );
  
}

export default Home