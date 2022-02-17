import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation,useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory()
    const [author, setAuthor] = useState({
        name:'',
        email:''
    })

const createAuthor = async() => {
const url = "http://localhost:3001"

const response = await fetch(`${url}/authors`,{
    method:"POST",
    body:JSON.stringify(author),
    headers:{
        "Content-Type" : "application/json",
    }
})

if(response.ok){
    const data = await response.json()
    if(data){
        console.log(data)
        setAuthor({
            name:'',
            email:''
        })
        // window.location.href = `http://localhost:3000/home/${data._id}`;

        history.push(`/home/${data._id}`)



    }
}
}

    return(<Container>
            <Row>
                <Col sm={12} md={8} lg={4} className="m-auto">
                <div className="d-flex flex-column mt-5 " style={{height:'500px', paddingTop:'200px'}}>
                    <p className='h3'>Enter detail to login</p>
                    <label for="name"> Full Name</label>
                    <input type="text" id="name" name="name" value={author.name} onChange={(e) => setAuthor({...author,name:e.target.value})}/>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" value={author.email} onChange={(e) => setAuthor({...author,email:e.target.value})}/>
                    <div className='mt-4 m-auto'>
                    <span className='btn btn-outline-primary' onClick={(e) => createAuthor()}>Confirm</span>
                    
                    </div>
                    {/* <label for="avatar">Avatar</label>
                    <input type="file" id="avatar" name="avatar" value=""/> */}
                    </div>
                </Col>
            </Row>
    </Container>)
}
export default Login 