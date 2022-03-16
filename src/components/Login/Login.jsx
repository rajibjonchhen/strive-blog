import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation,useHistory, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
    const [author, setAuthor] = useState({
        name:'',
        email:''
    })

    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

const [login, setLogin] = useState(false)

const createAuthor = async() => {
const url = "http://localhost:3001"

const response = await fetch(`${url}/authors/register`,{
    method:"POST",
    body:JSON.stringify(author),
    headers:{
        "Content-Type" : "application/json",
    }
})

if(response.ok){
    const {token, _id} = await response.json()
    if(token){
        localStorage.setItem("token",token);
        setAuthor({
            name:'',
            email:''
        })
        // window.location.href = `http://localhost:3000/home/${data._id}`;

        navigate(`/home`)
    }
}
}

const loginFunc = async(e) => {
        const url = "http://localhost:3001"
        
        const response = await fetch(`${url}/authors/login`,{
            method:"POST",
            body:JSON.stringify(userLogin),
            headers:{
                "Content-Type" : "application/json",
            }
        })
        if(response.ok){
            const {token, _id} = await response.json()
            if(token){
                console.log(token)
                localStorage.setItem("token",token);
                setUserLogin({
                    password:'',
                    email:''
                })
            
                // window.location.href = `http://localhost:3000/home/${data._id}`;
        
                navigate(`/home`)
            }
        }
}

    return(<Container>
            <Row>
                <Col sm={12} md={8} lg={4} className="m-auto">
                <div className="mt-5 " style={{height:'500px', paddingTop:'200px'}}>
                    <button onClick={() => setLogin(false)}>Register</button>
                    <button onClick={() => setLogin(true)}>Login</button>
                    <div style={{display:!login? "block":"none"}}>
                        <div className="d-flex flex-column mt-5 " style={{height:'500px', paddingTop:'20px'}} >
                            <p className='h3'>Enter detail to Register</p>
                            <label htmlFor="name"> Full Name</label>
                            <input type="text" id="name" name="name" value={author.name} onChange={(e) => setAuthor({...author,name:e.target.value})}/>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" value={author.email} onChange={(e) => setAuthor({...author,email:e.target.value})}/>
                            <div className='mt-4 m-auto'>
                            <span className='btn btn-outline-primary' onClick={(e) => createAuthor(e)}>Confirm</span>
                            </div>
                        </div>
                    </div>
                    {/* register */}
                    <div style={{display:login? "block":"none"}}>
                        <div className="d-flex flex-column mt-5 " style={{height:'500px', paddingTop:'20px'}} >
                            <p className='h3'>Enter detail to Login</p>
                            <label htmlFor="userName">Email</label>
                            <input type="text" id="userName" name="email" value={userLogin.email} onChange={(e) => setUserLogin({...userLogin,email:e.target.value})}/>
                            <label htmlFor="password"> Password</label>
                            <input type="password" id="userName" name="password" value={userLogin.password} onChange={(e) => setUserLogin({...userLogin,password:e.target.value})}/>
                            <div className='mt-4 m-auto'>
                            <span className='btn btn-outline-primary' onClick={(e) => loginFunc(e)}>Confirm</span>
                            </div>
                        </div>
                    </div>
                    {/* <label for="avatar">Avatar</label>
                    <input type="file" id="avatar" name="avatar" value=""/> */}
                    </div>
                </Col>
            </Row>
    </Container>)
}
export default Login 