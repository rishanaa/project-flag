import React from 'react'
import {AiOutlineTwitter,AiOutlineYoutube,AiOutlineCopyright} from 'react-icons/ai'
import {CiFacebook,CiLinkedin} from 'react-icons/ci'

function Footer() {
  return (
    <div style={{marginTop:'15%',marginBottom:'5%'}}>

      <div className='align-items-center justify-content-center'>
      <h2 style={{fontSize:'35px',display:'flex',justifyContent:'center',marginBottom:"20px"}}>
          <CiFacebook />
          <AiOutlineTwitter/>
          <CiLinkedin/>
          <AiOutlineYoutube/>
          </h2>
          <h5 style={{fontSize:'15px',display:'flex',justifyContent:'center'}}>Example@gmail.com</h5>
          <h5 style={{fontSize:'15px',display:'flex',justifyContent:'center'}}>Copyright <AiOutlineCopyright/>  2020 Name.All right reserved</h5>
      </div>
    </div>
  )
}

export default Footer
