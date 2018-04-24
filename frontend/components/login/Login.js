import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom'
import { Input } from 'semantic-ui-react'
import './styles/styles.css'
import SwitchButton from './react-switch-button'

class Login extends React.Component {
  // Ignore linter errors: additional methods will go here; not necessary to
  // switch to pure function. <--- Delete me when new methods are added.

  render() {
    // const { from } = this.props.location.state || { from: { pathname: '/' } }

    const {
      loggedInCand, loggedInRef, loginRef, loginCand, target,
    } = this.props;
    console.log('target inside login page', target);

    if (loggedInCand === true) {
      // if (target === undefined){
      //   return (
      //     <Redirect to={target} />
      //   )
      // } else {
      return (
        <Redirect to="/messages" />
      );
      // }
    } else if (loggedInRef === true) {
      // if (target === undefined){
      //   return (
      //     <Redirect to={target} />
      //   )
      // } else {
      return (
        <Redirect to="/messages" />
      );
    }
    return (
      <div>
        <div className="topnav">
          <div className="logo">
            KINDREDTALENT
          </div>
          <div className="aTag">
            <a>I&apos;m looking</a>
            <a>I&apos;m Referring</a>
            <button id="headerButtom" className="ui button"> Login </button>
          </div>
        </div>
        <div className="blueContainer">
        <div className="login">
          Login
        </div>
          <div className="inputBox">
            <Input className="loginPageInput" placeholder='Email' />
            <Input className="loginPageInput" placeholder='Password' />
            <div className="SwitchButton">
              <SwitchButton name="switch-8" label="Switch mode" mode="select" labelRight="Referrer" label="Candidate"/>
            </div>
            <button id="connect" className="medium ui button">Login</button>
          </div>
        </div>

      </div>
    );
  }
}

Login.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  loggedInRef: PropTypes.bool.isRequired,
  loginRef: PropTypes.func.isRequired,
  loginCand: PropTypes.func.isRequired,
  target: PropTypes.arrayOf('string').isRequired,
};

export default withRouter(Login);
