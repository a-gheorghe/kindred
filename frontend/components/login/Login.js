import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom'
import { Button, Input } from 'semantic-ui-react'
import '../styles/styles.css'
import Container from '../Container'

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        ref: true,
        can: false,
      }
  }

  refClick = () => this.setState({
    can: false,
    ref: true,
  })
  canClick = () => this.setState({
    can: true,
    ref: false,
  })
  // Ignore linter errors: additional methods will go here; not necessary to
  // switch to pure function. <--- Delete me when new methods are added.

  render() {
    const { can, ref } = this.state;
    // const { from } = this.props.location.state || { from: { pathname: '/' } }

    const {
      loggedInCand, loggedInRef, loginRef, loginCand,
    } = this.props;

    if (loggedInCand === true) {
      return (
        <Redirect to="/cand/messages" />
      );
    } else if (loggedInRef === true) {
      return (
        <Redirect to="/ref/messages" />
      );
    }
    return (
      <div className="maindiv">
        <div className="topnav">
          <div className="logo">
            KindredTalent
          </div>
          <div className="aTag">
            <a href="/candidate">I&#39;m Looking</a>
            <a href="/">I&#39;m Referring</a>
            <a href="#">Sign Up</a>
            <a href="#">Login</a>
          </div>
        </div>
        <img src="../background.svg" style={{position: 'fixed', bottom: '0px', width: '100%', zIndex: '-1'}}/>
        <Container>
          <div className="loginDiv">
            <div className="loginHeader">Sign into KindredTalent</div>
            <Button.Group>
              <Button toggle active={ref} onClick={this.refClick}>Referrer</Button>
              <Button toggle active={can} onClick={this.canClick}>Candidate</Button>
            </Button.Group>
            <div className="loginBox">
              <input className="loginInput" placeholder="Email" style={{marginBottom: "45px"}} type="text" name="name" />
              <input className="loginInput" placeholder="Password" style={{marginBottom: "20px"}} type="text" name="name" />
              <div className="loginRemember">
                <label className="loginLabel">
                  <input type="checkbox" value="" className="loginCheck"/>
                  Remember Me
                </label>
              </div>
              {/* Change button to call loginCand if Cand or loginRef if Ref */}
              <Button className="loginButton">Sign In</Button>
            </div>
            <a className="loginA" href="#">Forgot Password?</a>
          </div>
          <div className="loginSignup">
            Don’t have an account? <a className="loginASign" href="#">Sign Up</a>
          </div>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  loggedInRef: PropTypes.bool.isRequired,
  loginRef: PropTypes.func.isRequired,
  loginCand: PropTypes.func.isRequired,
};

export default withRouter(Login);
