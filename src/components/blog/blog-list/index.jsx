import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state = {
    posts:[]
  }
  
  componentDidMount = async() => {
    await this.fetchData()
  }
  
  fetchData = async() => {
    let url = process.env.REACT_APP_BE_URL
   try {
    let response = await fetch(`${url}/blogs`, {
      method:'GET',
    })
    if(response.ok){
      let data = await response.json()
      this.setState({posts:data.blogs})
      console.log(data)
    }else{
      
    }
   } catch (error) {
    console.log(error)
   }
  }
  render() {
    return (
      <Row>
        {this.state.posts && this.state.posts.reverse().map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
