import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthButton from './AuthButton'
import ShortBio from './ShortBio'

const Landing = (props) =>  {
  return (
  <div>
    <AuthButton authCand={props.authCand}/>
    <ul>
      <li><Link to="/about"> About Kindred Talent </Link></li>
      <li><Link to="/referrerRegister"> I want to refer someone </Link></li>
      <li><Link to="/candidateRegister"> I want a job </Link></li>
    </ul>
    <h3> Welcome to Kindred Talent. Here are some promising candidates </h3>
    <ShortBio />
    <ShortBio />
    <ShortBio />
    <ShortBio />
  </div>
  )
}

export default Landing;
