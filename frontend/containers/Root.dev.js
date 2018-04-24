import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';
import RegisterContainer from './registration/RegisterContainer';
import MessageThread from '../components/MessageThread';
import PrivateRouteBoth from '../components/authentication/PrivateRouteBoth';
import Login from '../components/login/Login';
import CandidateContainer from './registration/CandidateContainer';

import axios from 'axios';

class AuthExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInCand: false,
      loggedInRef: false,
      // targetPath: '/',
    };

    const fakeAuthCand = {
      isAuthenticated: false,
      authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
      },
      register(cb) {
        this.authenticate(cb);
      },
      logout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
      },
    };

    const fakeAuthRef = {
      isAuthenticated: false,
      authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
      },
      register(cb) {
        this.authenticate(cb);
      },
      logout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
      },
    };

    this.loginCand = () => {
      fakeAuthCand.authenticate(() => {
        this.setState(() => ({
          loggedInCand: fakeAuthCand.isAuthenticated,
        }));
      });
    };

    this.registerCand = () => {
      fakeAuthCand.register(() => {
        this.setState(() => ({
          loggedInCand: fakeAuthCand.isAuthenticated,
        }));
      });
    };

    this.logoutCand = () => {
      fakeAuthCand.logout(() => {
        window.location.pathname = '/candidate';
      });
    };

    this.loginRef = () => {
      console.log('inside login ref function');
      fakeAuthRef.authenticate(() => {
        this.setState(() => ({
          loggedInRef: fakeAuthRef.isAuthenticated,
        }));
      });
    };

    this.registerRef = () => {
      console.log('calling register ref');
      fakeAuthRef.register(() => {
        this.setState(() => ({
          loggedInRef: fakeAuthRef.isAuthenticated,
        }));
      });
    };

    this.logoutRef = () => {
      fakeAuthRef.logout(() => {
        window.location.pathname = '/';
      });
    };

    this.setTarget = (url) => {
      console.log('url that was passed in as target', url);
      this.target = url;
    };
  }


  render() {
    return (
      <BrowserRouter basename="/app">
        <div>
          <Route path="/register" render={props => <RegisterContainer loggedInCand={this.state.loggedInCand} loggedInRef={this.state.loggedInRef} registerRef={this.registerRef} registerCand={this.registerCand} logoutCand={this.logoutCand} logoutRef={this.logoutRef} />} />
          <PrivateRouteBoth exact path="/messages" component={MessageThread} logoutCand={this.logoutCand} logoutRef={this.logoutRef} loggedInCand={this.state.loggedInCand} loggedInRef={this.state.loggedInRef} setTarget={this.setTarget} />
          <Route path='/login'  render={(props) => <Login target={this.target} setTarget={this.setTarget} loggedInCand={this.state.loggedInCand} loggedInRef={this.state.loggedInRef} loginCand={this.loginCand} loginRef={this.loginRef} {...props}/>} />
          <Route path='/cand' render={props => (
            <CandidateContainer
              loggedInCand={this.state.loggedInCand}
              logoutCand={this.logoutRef}
              setTarget={this.setTarget}
              target={this.target}
              {...props}
            />
          )}
        />
      </div>
      </BrowserRouter>
    );
  }
}

export default AuthExample;
