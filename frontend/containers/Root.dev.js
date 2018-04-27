import React from 'react'; // , { Component }
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom'; // , Link, Redirect, withRouter

import RegisterContainer from './registration/RegisterContainer';
import MessageThread from '../components/MessageThread';
import PrivateRouteBoth from '../components/authentication/PrivateRouteBoth';
import CandidateContainer from './registration/CandidateContainer';
import Login from '../components/login/Login';
import PrivateRouteCand from '../components/authentication/PrivateRouteCand';
import PrivateRouteRef from '../components/authentication/PrivateRouteRef';
import ReferrerContainer from './registration/ReferrerContainer';
import MessageContainer from './../components/MessageContainer';


class AuthExample extends React.Component {
  constructor(props) {
    super(props);
    console.log('I AM CONSTRUCTING THE OVERARCHING CONTAINER')
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
      this.target = url;
    };
  }


  render() {
    return (
      <BrowserRouter basename="/app">
        <div>
          {/* Renders the first page of the registration form for cands & recruiters */}
          <Route
            path="/register"
            render={props =>
              (<RegisterContainer
                loggedInCand={this.state.loggedInCand}
                loggedInRef={this.state.loggedInRef}
                registerRef={this.registerRef}
                registerCand={this.registerCand}
                logoutCand={this.logoutCand}
                logoutRef={this.logoutRef}
                {...props}
              />
            )}
          />
          {/* Renders a user's login page */}
          <Route
            path="/login"
            render={props =>
              (<Login
                target={this.target}
                setTarget={this.setTarget}
                loggedInCand={this.state.loggedInCand}
                loggedInRef={this.state.loggedInRef}
                loginCand={this.loginCand}
                loginRef={this.loginRef}
                {...props}
              />)
            }
          />
          {/* Renders referrer routes */}
          <Route
            path="/ref"
            render={props =>
              (<ReferrerContainer
                loggedInRef={this.state.loggedInRef}
                logoutRef={this.logoutRef}
                setTarget={this.setTarget}
                {...props}
              />
            )}
          />
          {/* Renders candidate routes */}
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
