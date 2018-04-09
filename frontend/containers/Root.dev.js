import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom'
import About from '../components/About'
import Protected from '../components/Protected'
import CandidateDashboard from '../components/CandidateDashboard'
import AuthButton from '../components/AuthButton'
import Login from '../components/Login'

import axios from 'axios'
// import Login from '../components/Login'

const fakeAuth = {
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


// component
const PrivateRoute = ({ component: Component, ...rest  }) => {
  return (
    <Route {...rest}
      render={(props) => fakeAuth.isAuthenticated === true ?
        <Component {...props}/> :
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />}
      />
  )
}


export default function AuthExample () {

  return (
    <div>
      <BrowserRouter>
        <div>
          <AuthButton auth={fakeAuth}/>
            <ul>
              <li><Link to="/about"> About Kindred Talent </Link></li>
              <li><Link to="/protected"> Protected Page </Link></li>
              <li><Link to="/candidateDashboard"> Candidate Dashboard </Link></li>
            </ul>
          <Route path="/about" component={About}/>
          <Route path="/login"  render={(props) => <Login auth={fakeAuth} {...props}/>} />
          <PrivateRoute path="/protected" component={Protected} />
          <PrivateRoute path="/candidateDashboard" component={CandidateDashboard} />
        </div>
      </BrowserRouter>
    </div>
  )
}
