import React from 'react'
import '../App.css'
import image from './image.png'
import {AiOutlineGoogle,AiOutlineTwitter} from 'react-icons/ai'
import {CiFacebook} from 'react-icons/ci'
import {CiLinkedin} from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'


function Login() {

   const navigate = useNavigate();

  return (
    <div className='login' style={{display:'flex'}}>
        <div>
      <h1>Sign In</h1>
      <h5 style={{fontSize:'18px',marginBottom:'15px'}}>New user? 
        <button 
        style={{border:'none',backgroundColor:'white',color:'blue',fontSize:'18px'}}
        >Create an account</button>
        </h5>
      <input type="text"
             className='input1' 
             placeholder='Username or email'/><br/>
       <input type="password"
              className='input1'
              placeholder='Password'/><br/>
      <input type="checkbox" className='check'/>
      <label htmlFor="check" style={{fontWeight:'700',fontSize:'13px',marginLeft:'10px'}}> Keep me signed in</label><br/>
      <button className='btn1' style={{backgroundColor:'black',color:'white',border:'none',padding:'8px',border:'2px solid black'}}
       onClick={() => {
        navigate("/home");
      }}>
        Sign In</button>
      <div style={{display:'flex',marginTop:'10px'}}>
      <div className='border'></div>
      <h5 style={{marginTop:'20px',marginBottom:'20px'}}> Or Sign In With</h5>
      <div className='border'></div>
      </div>
      <h2 style={{fontSize:'35px',display:'flex',justifyContent:'space-around'}}><AiOutlineGoogle /> 
          <CiFacebook />
          <CiLinkedin/>
          <AiOutlineTwitter/></h2>
      </div>
      <div>
        <img src={image} className='image'/>
      </div>
    </div>
  );
};

export default Login
