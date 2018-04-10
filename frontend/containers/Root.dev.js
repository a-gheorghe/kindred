import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom'
import About from '../components/About'
import AuthButton from '../components/AuthButton'
import Login from '../components/Login'
import PrivateRouteCand from '../components/PrivateRouteCand'
import PrivateRouteEmp from '../components/PrivateRouteEmp'
import CandidateSelfProfile from '../components/CandidateSelfProfile'
import Landing from '../components/Landing'
import EmployeeRegister from '../components/EmployeeRegister'
import CandidateRegister from '../components/CandidateRegister'
import AllCandidates from '../components/AllCandidates'


import axios from 'axios'
// import Login from '../components/Login'

const fakeAuthCand = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const fakeAuthEmp = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


export default function AuthExample () {
  return (
    // <div>
      <BrowserRouter>
        <div>
          <Route exact path='/' render={(props) => <Landing authCand={fakeAuthCand} {...props}/>} />
          <Route path="/about" component={About}/>
          <Route path='/employeeRegister' render={(props) => <EmployeeRegister authEmp={fakeAuthEmp} {...props}/>} />
          <Route path='/candidateRegister' render={(props) => <CandidateRegister authCand={fakeAuthCand} {...props}/>} />
          <Route path="/login"  render={(props) => <Login authCand={fakeAuthCand} {...props}/>} />
          <PrivateRouteCand path="/candidateSelfProfile" component={CandidateSelfProfile} authCand={fakeAuthCand} />
          <PrivateRouteEmp path="/allCandidates" component={AllCandidates} authEmp={fakeAuthEmp} />
        </div>
      </BrowserRouter>
    // </div>
  )
}
