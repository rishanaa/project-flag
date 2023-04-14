import React from 'react'
import Navbar from './Navbar'
import CountryCard from './Card/CountryCard'
import Footer from './Card/Footer'

function Home() {
  return (
    <div style={{margin:'10px 40px'}}>
      <Navbar/>
      <CountryCard/>
      <Footer/>
    </div>
  )
}

export default Home
