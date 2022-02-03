import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
// import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
import BlogLike from "../../components/likes/BlogLike";
// import posts from "../../data/posts.json";
import "./styles.css";

const Blog = (props) => {
const [blog, setBlog]  = useState({}) 
const [loading,setLoading] = useState(true)


  useEffect(()=>{
    const blogId = props.params.blodId
    fetchBlog(blogId)
  },[])

  const fetchBlog = async(blogId) => {
    let url = process.env.REACT_APP_BE_URL
    try {
    let response = await fetch(`${url}/blogs/${blogId}`, {
      method:'GET',
    })
    if(response.ok){
      let data = await response.json()
      setBlog(data)
      console.log(data)
      setLoading(false)
    }else{
      setLoading(false)
    }
  } catch (error) {
    console.log(error)
    setLoading(false)
    }
  }

      return (
        <div className="blog-details-root">
          {!blog && !loading? (<Container>
            <Image className="blog-details-cover" src={blog.cover} fluid />
            <h1 className="blog-details-title">{blog.title}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...blog.author} />
              </div>
              <div className="blog-details-info">
                <div>{blog.createdAt}</div>
                <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div>
                <div style={{marginTop:20}}>
                  <BlogLike defaultLikes={["123"]} onChange={console.log}/>
                </div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </Container>):(<h1>Loading</h1>)}
        </div>
      )
      
}

export default Blog;
