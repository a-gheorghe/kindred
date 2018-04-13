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
import Message from '../components/Message'
import MessageThread from '../components/MessageThread'
import PrivateRouteBoth from '../components/PrivateRouteBoth'
import ReferralProfile from '../components/ReferralProfile'
import GivenReferrals from '../components/GivenReferrals'
import ReceivedReferrals from '../components/ReceivedReferrals'
import CandidateRegisterOne from '../components/CandidateRegisterOne'
import CandidateRegisterTwo from '../components/CandidateRegisterTwo'


import axios from 'axios'
// import Login from '../components/Login'

class AuthExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInCand: false,
      loggedInRef: false,
      targetPath: '/'
    }


  const fakeAuthCand = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    register(cb) {
      this.authenticate(cb);
    },
    logout(cb) {
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
    register(cb) {
      this.authenticate(cb);
    },
    logout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

  this.loginCand = () => {
    fakeAuthCand.authenticate(() => {
      this.setState(() => ({
        loggedInCand: fakeAuthCand.isAuthenticated
      }))
    })
  }

  this.registerCand = () => {
    fakeAuthCand.register(() => {
      this.setState(() => ({
        loggedInCand: fakeAuthCand.isAuthenticated
      }))
    })
  }

  // this.logoutCand = () => {
  //   fakeAuthCand.logout(() => {
  //     this.setState(() => ({
  //       loggedInCand: fakeAuthCand.isAuthenticated
  //     })); window.location.pathname="/candidate"
  //   })
  // }

  this.logoutCand = () => {
    fakeAuthCand.logout(() => {
       window.location.pathname="/candidate"
    })
  }

  this.loginRef = () => {
    console.log('inside login ref function')
    fakeAuthRef.authenticate(() => {
      this.setState(() => ({
        loggedInRef: fakeAuthRef.isAuthenticated
      }))
    })
  }

  this.registerRef = () => {
    fakeAuthRef.register(() => {
      this.setState(() => ({
        loggedInRef: fakeAuthRef.isAuthenticated
      }))
    })
  }

  this.logoutRef = () => {
    fakeAuthRef.logout(() => {
      window.location.pathname='/'
    })
  }

  this.setTarget = (url) => {
    console.log('url that was passed in as target', url)
    this.target = url
  }

}


  render(){
    return (
      // <div>
      <BrowserRouter basename='/app'>
      <div>
        {/* <Route exact path='/' render={(props) => <Landing logoutCand={this.logoutCand} setTarget={this.setTarget} logoutRef={this.logoutRef} loggedInCand={this.state.loggedInCand} loggedInRef={this.state.loggedInRef} {...props}/>} /> */}
        <Route path='/about' component={About}/>
        <Route path='/referrerRegister' render={(props) => <ReferrerRegister target={this.target} setTarget={this.setTarget} registerRef={this.registerRef} loggedInRef={this.state.loggedInRef} {...props}/>} />
        <Route path='/candidateRegister' render={(props) => <CandidateRegister target={this.target} setTarget={this.setTarget} registerCand={this.registerCand} loggedInCand={this.state.loggedInCand} {...props}/>} />
        <Route path='/login'  render={(props) => <Login target={this.target} setTarget={this.setTarget} loggedInCand={this.state.loggedInCand} loggedInRef={this.state.loggedInRef} loginCand={this.loginCand} loginRef={this.loginRef} {...props}/>} />
        <PrivateRouteRef exact path='/allCandidates' component={AllCandidates} loggedInRef={this.state.loggedInRef} logoutRef={this.logoutRef} />
        <PrivateRouteRef path="/profileRef" component={ReferralProfile} loggedInRef={this.state.loggedInRef} logoutRef={this.logoutRef} />
        <PrivateRouteRef path="/referrals" component={GivenReferrals} loggedInRef={this.state.loggedInRef} logoutRef={this.logoutRef} />
        <PrivateRouteCand path='/candidateSelfProfile' component={CandidateSelfProfile} loggedInCand={this.state.loggedInCand} setTarget={this.setTarget} logoutCand={this.logoutCand} />
        <PrivateRouteCand path="/receivedreferrals" component={ReceivedReferrals} loggedInCand={this.state.loggedInCand} logoutCand={this.logoutCand} setTarget={this.setTarget}/>
        <PrivateRouteCand path="/candidateRegisterOne" component={CandidateRegisterOne} loggedInCand={this.state.loggedInCand} logoutCand={this.logoutCand} setTarget={this.setTarget} />
        <PrivateRouteCand path="/candidateRegisterTwo" component={CandidateRegisterTwo} loggedInCand={this.state.loggedInCand} logoutCand={this.logoutCand} setTarget={this.setTarget} />

        <PrivateRouteBoth path='/candidateExternalProfile' component={CandidateExternalProfile} loggedInCand={this.state.loggedInCand} loggedInRef={this.state.loggedInRef} logoutCand={this.logoutCand} logoutRef={this.logoutRef} setTarget={this.setTarget} />
        <PrivateRouteBoth exact path='/messages' component={MessageThread} logoutCand={this.logoutCand} logoutRef={this.logoutRef} loggedInCand={this.state.loggedInCand} loggedInRef={this.state.loggedInRef} setTarget={this.setTarget} />
      </div>
    </BrowserRouter>
    // </div>
    )
  }
}

export default AuthExample;
