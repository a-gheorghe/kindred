import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom'
import About from '../components/About'
import AuthButton from '../components/AuthButton'
import Login from '../components/Login'
import PrivateRouteCand from '../components/PrivateRouteCand'
import PrivateRouteRef from '../components/PrivateRouteRef'
import CandidateSelfProfile from '../components/CandidateSelfProfile'
import Landing from '../components/Landing'
import ReferrerRegister from '../components/ReferrerRegister'
import CandidateRegister from '../components/CandidateRegister'
import AllCandidates from '../components/AllCandidates'
import CandidateExternalProfile from '../components/CandidateExternalProfile'
import Messages from '../components/Messages'
import PrivateRouteBoth from '../components/PrivateRouteBoth'


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

const fakeAuthRef = {
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


export default function AuthExample (props) {
  ('props main', props)
  return (
    // <div>
      <BrowserRouter basename='/app'>
        <div>
          <Route exact path='/' render={(props) => <Landing authCand={fakeAuthCand} {...props}/>} />
          <Route path='/about' component={About}/>
          <Route path='/referrerRegister' render={(props) => <ReferrerRegister authRef={fakeAuthRef} {...props}/>} />
          <Route path='/candidateRegister' render={(props) => <CandidateRegister authCand={fakeAuthCand} {...props}/>} />
          <Route path='/login'  render={(props) => <Login authCand={fakeAuthCand} authRef={fakeAuthRef} {...props}/>} />
          <Route path='/candidateExternalProfile' render={(props) => <CandidateExternalProfile authCand={fakeAuthCand} authRef={fakeAuthRef} {...props}/>} />
          <PrivateRouteBoth path='/messages' render={(props) => <Messages authCand={fakeAuthCand} authRef={fakeAuthRef} {...props} />} />
          <PrivateRouteCand path='/candidateSelfProfile' component={CandidateSelfProfile} authCand={fakeAuthCand} />
          <PrivateRouteRef path='/allCandidates' component={AllCandidates} authRef={fakeAuthRef} />
        </div>
      </BrowserRouter>
    // </div>
  )
}
