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
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(AuthButton);
