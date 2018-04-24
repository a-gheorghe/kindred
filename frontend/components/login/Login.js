import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';


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
      return (
        <Redirect to="/cand/messages" />
      );
    } else if (loggedInRef === true) {
      return (
        <Redirect to="/ref/messages" />
      );
    }
    return (
      <div>
        <p> You must log in to view the page </p>
        <form>
            Username: <input type="text" name="username" /> <br />
            Password: <input type="password" name="password" />
        </form>
        <button onClick={loginCand}>Login as candidate</button>
        <button onClick={loginRef}>Login as referrer</button>
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
