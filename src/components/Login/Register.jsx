import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OathLogin from "./OathLogin";

function Register({setLogin}) {

const navigate = useNavigate()
const [isValid, setIsValid] = useState()

    const [author, setAuthor] = useState({
        name:'',
        surname:'',
        email:'',
        password:'',
        rePassword:''
    })

    const handleSubmit = (e) => {
        e.prevent.default()
        createAuthor()
    }
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
    return ( 
        <form onSubmit={(e) => {handleSubmit(e)}} className="needs-validation d-flex flex-column mt-5 text-left" novalidate>
            <p className='h3'>Enter detail to Register</p>
            
            <label  htmlFor="name">  Name *</label>
            <input required type="text" id="name" name="name" value={author.name} onChange={(e) => {setAuthor({...author,name:e.target.value})}}/>
            <span ></span>
            
            <label  htmlFor="surname"> Last Name *</label>
            <input required type="text" id="surname" name="surname" value={author.surname} onChange={(e) => setAuthor({...author,surname:e.target.value})}/>
            <span ></span>
            
            <label  htmlFor="email">Email *</label>
            <input required type="email" id="email" name="email" value={author.email} onChange={(e) => setAuthor({...author,email:e.target.value})}/>
            <span ></span>
            
            <label htmlFor="pw">Password *</label>
            <input required type="password" id="pw" name="pw" value={author.password} onChange={(e) => setAuthor({...author,password:e.target.value})}/>
            <span ></span>
            
            <label htmlFor="repassword">Re Password *</label>
            <input required type="password" id="repassword" name="pw" value={author.password} onChange={(e) => setAuthor({...author,rePassword:e.target.value})}/>
            <span ></span>
            
            {/* <label for="avatar">Avatar</label>
            <input type="file" id="avatar" name="avatar" value=""/> */}

            <div className='mt-4 text-center'>
            <button type='submit' className=' btn btn-outline-primary' >Register</button>
            <p className="mt-2">Already a member <span className = "text-primary pointer" onClick={() => setLogin(true)}> sign in</span></p>
                <OathLogin/>
            </div>
     </form>
     );
}

export default Register;