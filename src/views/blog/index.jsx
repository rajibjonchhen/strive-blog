import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
// import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
import BlogLike from "../../components/likes/BlogLike";
// import posts from "../../data/posts.json";
import "./styles.css";

const Blog = (props) => {
const [blog, setBlog]  = useState({}) 
const [reviews, setReviews]  = useState({}) 
const [loading,setLoading] = useState(true)
const params = useParams()

  useEffect(async()=>{
    const id =  params.id

      await fetchBlog(id)
    
  },[])

  const fetchBlog = async(id) => {
    let url =  "http://localhost:3001"//process.env.REACT_APP_BE_URL
   

      try {
        let response = await fetch(`${url}/blogs/${id}`, {
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


  const fetchReviews = async(id) => {
    let url =  "http://localhost:3001"//process.env.REACT_APP_BE_URL
   

      try {
        let response = await fetch(`${url}/blogs/${id}/reviews`, {
          method:'GET',
        })
        if(response.ok){
          let data = await response.json()
          setReviews(data)
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
          <Container>
          {blog && (<div>
            <img className="blog-details-cover w-100" src={blog.cover} fluid  alt="blog pic"/>
            <h1 className="blog-details-title">{blog.title}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...blog} {...blog.author} />
              </div>
              <div className="blog-details-info">
                {/* <div>{blog.createdAt}</div>
                <div>{blog.readTime.value} {blog.readTime.unit} read</div> */}
                <div style={{marginTop:20}}>
                  <BlogLike defaultLikes={["123"]} onChange={console.log}/>
                </div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            {/* <button className="btn btn-primary mt-4" onClick={(e) => set} >Show Reviews</button> */}

            </div>)}
            </Container>
        </div>
      )
      
}

export default Blog;
