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
    console.log('I AM CONSTRUCTING THE OVERARCHING CONTAINER');
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

    this.loginCand = (email, password) => {
      console.log('sending with email ', email, 'sending with password ', password);
      axios.post('/candidate/login', { email, password })
        .then(result => console.log('result is', result))
        .catch(err => console.log('error is ', err));
    };

    this.loginRef = (email, password) => {
      console.log('Global this.loginRef');
      console.log('Attempting login...');
      console.log('sending with email ', email, 'sending with password ', password);
      return axios.post('/referrer/login', { email, password })
        .then((resp) => {
          console.log('Response received from server...');
          console.log(resp.data);
          if (resp.data.success) {
            this.setState({ loggedInRef: true });
          }
        })
        .catch((err) => {
          console.log('Something went wrong during login...');
          console.log(err);
        });
    };

    this.registerCand = () => {
      fakeAuthCand.register(() => {
        this.setState(() => ({
          loggedInCand: fakeAuthCand.isAuthenticated,
        }));
      });
    };

    this.registerRef = (refObj) => {
      console.log('Global this.registerRef');
      console.log('Attempting registration...');
      console.log(refObj);
      return axios.post('/register-referrer', refObj)
        .then((resp) => {
          console.log('Response received from server...');
          console.log(resp.data);
          // attempt immediate login
          return this.loginRef(refObj.email, refObj.password);
        })
        .catch((err) => {
          console.log('Something went wrong during registration...');
          console.log(err);
        });
    };

    this.logoutCand = () => {
      fakeAuthCand.logout(() => {
        window.location.pathname = '/candidate';
      });
    };

    this.checkAuthRef = () => {
      console.log('Global this.checkAuthRef');
      console.log('Attempting authentication...');
      return axios.get('/referrer/checkAuth')
        .then((resp) => {
          console.log('resp from checkAuthRef: ', resp);
          if (resp.data.user) {
            this.setState({ loggedInRef: true });
            return resp.data.user;
          }
          throw new Error('Not logged in...');
        })
        .catch((err) => {
          this.setState({ loggedInRef: false });
          console.log(err);
          return err;
        });
    };

    this.logoutRef = () => {
      console.log('Global this.logoutRef');
      console.log('Attempting logout...');
      return axios.get('/logout')
        .then((resp) => {
          console.log('Response received from server...');
          console.log(resp.data);
          this.setState({ loggedInRef: false });
        })
        .catch((err) => {
          console.log('Something went wrong during logout...');
          console.log(err);
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
                loginRef={this.loginRef}
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
                checkAuthRef={this.checkAuthRef}
                {...props}
              />
            )}
          />
          {/* Renders candidate routes */}
          <Route
            path="/cand"
            render={props => (
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
