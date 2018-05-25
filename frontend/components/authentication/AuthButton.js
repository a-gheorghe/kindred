/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class AuthButton extends React.Component {

  render() {
    console.log('*******Auth button component loggedInCand*****', this.props.loggedInCand)
    const {
      history, loggedInCand, loggedInRef, logoutCand, logoutRef,
    } = this.props;
    if (loggedInCand) {
      return (
          // <a className="aTag" onClick={logoutCand}> Logout as Candidate!!!! </a>
          <button onClick={logoutCand}> Logout as Candidate!!!! </button>
      );
    } else if (loggedInRef) {
      return (
          <button onClick={logoutRef}> Sign out </button>
      );
    } else {
    return (
      <p> You are not logged in </p>
    );
  }
}
}

AuthButton.propTypes = {
  loggedInRef: PropTypes.bool,
  logoutRef: PropTypes.func,
  loggedInCand: PropTypes.bool,
  logoutCand: PropTypes.func,
  history: PropTypes.shape({
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    listen: PropTypes.func,
    location: PropTypes.object,
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
};

export default withRouter(AuthButton);
