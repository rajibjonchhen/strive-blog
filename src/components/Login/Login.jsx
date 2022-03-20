import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OathLogin from "./OathLogin";



function Login({setLogin}) {

  const navigate = useNavigate()

    const [userLogin, setUserLogin] = useState({
        email:{type:String} ='',
        password:''
    })

    const handleSubmit = ({useLogin}) => {
        loginFunc()
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
                    navigate(`/home`)
                }
            }
    }

    return (
    <form  onSubmit={(e) => handleSubmit(e)} className="needs-validation d-flex flex-column mt-5 " novalidate>
        <p className='h3'>Enter detail to Login</p>

        <label htmlFor="user">Email</label>
        <input required type="email" id="user" name="user" value={userLogin.email} onChange={(e) => setUserLogin({...userLogin,email:e.target.value})}/>
        <span></span>
        
        <label htmlFor="loginPw"> Password</label>
        <input required class="form-control" type="password" id="loginPw" name="loginPw" value={userLogin.password} onChange={(e) => setUserLogin({...userLogin,password:e.target.value})}/>
        <span></span>
        <div className='mt-4 text-center'>

        <button type='submit' className='btn btn-outline-primary' onClick={(e) => handleSubmit(e)}>Sign in</button>
        <p className="mt-2">Not a member <span className = "text-primary pointer" onClick={() => setLogin(false)}> Sign Up</span></p>
            {/* register through google and facebook  */}
            <OathLogin/>
        </div>
    </form>
        
      );
}

export default Login;