import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";

const NewBlogPost = ({fetchPosts, posts}) => {
  const [coverImg, setCoverImg] = useState()
  const [avatarImg, setAvatarImg] = useState()
  const [post, setPost] = useState( {
    category: "",
    title: "",
    cover: "",
    readTime: {
        value: null,
        unit: ""
    },
    author: {
        name: "",
        avatar: ""
    },
    content: "html",
        } 
)
      
  useEffect(()=>{},[])

  const handleChangeCover = (e) => {
    setCoverImg(e.target.files[0])
  }
  {/* for changing avatar */}
  const handleChangeAvatar = (e) => {
    setCoverImg(e.target.files[0])
  }
  
  const writePost = async(e) => {
    e.preventDefault()
    console.log(post)
    let url = process.env.REACT_APP_BE_URL
    try {
      let response = await fetch(`${url}/blogs`, {
        method:"POST",
        body: JSON.stringify(post),
      header:{
        "content-type":"application/JSON"
      }

      })
      if(response.ok){
        let data  = await response.json();
       if(data){
         console.log(data)
        await uploadCover(data.blogId)
       }
      }else {
        console.log("error on new posts")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const uploadCover = async(id) => {
    console.log("ID: ", id)
    console.log("cover Image data: ", coverImg)
    const formData = new FormData()
    formData.append('image',coverImg)
    console.log(formData)
    let url = process.env.REACT_APP_BE_URL
   try {
    let response = await fetch(`${url}/blogs/${id}/cloudinaryUploadCover`, {
      method:'PUT',
      body:formData
    })
    if(response.ok){
       
      await fetchPosts()
      
    }else{
      
    }
   } catch (error) {
    console.log(error)
   }
  }
{/* for changing avatar */}
  // const uploadAvatar = async(id) => {
  //   const formData = new FormData()
  //   formData.append('image',this.state.selectedFile)
  //   let url = process.env.REACT_APP_BE_URL
  //  try {
  //   let response = await fetch(`${url}/blogs/${id}/cloudinaryUploadAvatar`, {
  //     method:'PUT',
          // body:formData

  //   })
  //   if(response.ok){
  //     let data = await response.json()
  //     fetchPosts()
  //     console.log(data)
  //   }else{
      
  //   }
  //  } catch (error) {
  //   console.log(error)
  //  }
  // }


  
  
  
    
    return (
      <Container className="new-blog-container">
        <Form className="mt-5">
          <Form.Group controlId="blog-form" className="m-3">
            <Form.Label >Title</Form.Label>
            <Form.Control value={post.title} onChange={(e) => setPost({...post ,title:e.target.value})} size="lg" placeholder="Title" />
          </Form.Group>
          <div className="d-flex">
          <Form.Group controlId="blog-category" className="m-3">
            <Form.Label>Category</Form.Label>
            <Form.Control size="lg" as="select" value={post.category} onChange={(e) => setPost({...post, category:e.target.value})}>
              <option>Horror</option>
              <option>Romantic</option>
              <option>History</option>
              <option>Scifi</option>
              <option>Category5</option>
            </Form.Control>
          </Form.Group>
          {/* <Form.Group controlId="blog-author" className="m-3">
            <Form.Label >Author</Form.Label>
            <Form.Control value={post} onChange={(e) => setPost({...post ,author:{...post.author,name:e.target.value}})} size="lg" placeholder="Author" />
          </Form.Group> */}
          </div>
          <Form.Group className='d-flex flex-column m-3'>
          <Form.Label >Upload Cover Image</Form.Label>
            <input
              style={{height:'50px'}}
              type='file'
              onChange={(e) => handleChangeCover(e)}
              // isInvalid={!!errors.file}
              // feedback={errors.file}
              id="validationFormik107"
              feedbackTooltip
            />
          </Form.Group>
{/* for changing avatar */}
          {/* <Form.Group className='d-flex flex-column m-3'>
          <Form.Label >Upload Avatar </Form.Label>
            <input
              style={{height:'50px'}}
              type='file'
              onChange={(e) => handleChangeAvatar(e)}
              // isInvalid={!!errors.file}
              // feedback={errors.file}
              id="validationFormik107"
              feedbackTooltip
            />
          </Form.Group> */}
          <Form.Group controlId="blog-content" className="m-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill value={post.content} onChange={(html) => setPost({content:html})} className="new-blog-content" placeholder="write the blog here"/>
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="button"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
              onClick={(e)=>writePost(e)}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  
}
export default NewBlogPost
