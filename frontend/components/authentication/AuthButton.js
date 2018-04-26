/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class AuthButton extends React.Component {

  render() {
    const {
      history, loggedInCand, loggedInRef, logoutCand, logoutRef,
    } = this.props;
    if (loggedInCand) {
      return (
        <p> Welcome!
          <button onClick={logoutCand}> Sign out </button>
        </p>
      );
    } else if (loggedInRef) {
      return (
        <p> Welcome!
          <button onClick={logoutRef}> Sign out </button>
        </p>
      );
    }
    return (
      <p> You are not logged in </p>
    );
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
