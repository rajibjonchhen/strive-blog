import React from 'react'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import insta from '../../assets/instagram.png'

function OathLogin() {
    return ( 
        <div className='text-center mt-2'>
            <a href="http://localhost:3001/authors/googleLogin">
            <img className='oath-img pointer' src={google} alt/>
            </a>
            <a href="/">
            <img className='oath-img pointer' src={insta} alt/>
            </a>
            <a href="/">
            <img className='oath-img pointer' src={facebook} alt/>
            </a>
        </div>
     );
}

export default OathLogin;