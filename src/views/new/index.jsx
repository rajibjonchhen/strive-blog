import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
export default class NewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: "",
      posts:{},
      file:null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  fetchData = async() => {
    let url = process.env.REACT_APP_BE_URL
    let response = await fetch(`${url}/blogs`, {
      method:'POST'
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
      <Container className="new-blog-container">
        <Form className="mt-5">
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control size="lg" placeholder="Title" onChange={(e)=> this.setState({...this.state.posts, title:e.target.value})}/>
          </Form.Group>
         <div>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control size="lg" as="select" onChange={(e)=> this.setState({...this.state.posts, category:e.target.value})}>
              <option>Category1</option>
              <option>Category2</option>
              <option>Category3</option>
              <option>Category4</option>
              <option>Category5</option>
          </Form.Control>
          </Form.Group>
            <div className='d-flex mt-3 flex-column'>
          <Form.Label>Choose Image to upload</Form.Label>
          <input type='file' style={{height:'30px'}} onChange={(e)=> this.setState({file:e.target.files[0]})}/>
            </div>
         </div>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange}
              className="new-blog-content"
              
            />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
