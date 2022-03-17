import React from 'react'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import insta from '../../assets/instagram.png'

function OathLogin() {
    return ( 
        <div className='text-center mt-2'>
            <img className='oath-img pointer' src={google} alt/>
            <img className='oath-img pointer' src={insta} alt/>
            <img className='oath-img pointer' src={facebook} alt/>
        </div>
     );
}

export default OathLogin;