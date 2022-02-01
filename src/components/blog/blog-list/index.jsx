import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state = {
    posts:[]
  }
  
  componentDidMount = () => {
    this.fetchData()
  }
  
  fetchData = async() => {
    let url = process.env.REACT_APP_BE_URL
    let response = await fetch(`${url}/blogs`, {
      method:'GET',
    })
    if(response.ok){
      let data = await response.json()
      this.setState({posts:data})
      console.log(data)
    }else{
      
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
