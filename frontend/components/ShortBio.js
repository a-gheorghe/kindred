import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const ShortBio = () =>  {
  return (
    <div style={{border: '1px solid black'}}>
      <h3> Candidate Picture </h3>
      <div> Candidate one info  <Link style={{textDecoration: 'none', color: 'white', backgroundColor: 'blue', borderRadius: '2px'}} to="/messages"> Connect </Link> </div>
    </div>
  )
}

export default ShortBio;
