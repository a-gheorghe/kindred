import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link, withRouter } from 'react-router-dom';

class ReferrerRegister extends React.Component {
  // Ignore linter errors: additional methods will go here; not necessary to
  // switch to pure function. <--- Delete me when new methods are added.

  render() {
    console.log('Referrer props', this.props);
    // move to component will mount
    if (this.props.loggedInRef === true) {
      if (this.props.target === '/referrerRegister') {
        return (
          <Redirect to="/allCandidates" />
        );
      }
      return (
        <Redirect to={this.props.target} />
      );
    }

    return (
      <div>
        Register an employeee looking to refer candidates
        <form>
            Full Name: <input type="text" name="fullname" /> <br />
            Current Company: <input type="text" name="company" /> <br />
            Email: <input type="text" name="email" /> <br />
            Password: <input type="password" name="password" /> <br />
        </form>
        <button onClick={this.props.registerRef}> Register as Referrer </button> <br />
        <Link to="/login"> Already have an account? Log in! </Link>
      </div>
    );
  }
}

ReferrerRegister.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  target: PropTypes.string.isRequired,
  registerRef: PropTypes.func.isRequired,
};

export default withRouter(ReferrerRegister);
