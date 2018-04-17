import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';

class PrivateRouteBoth extends React.Component {
  componentWillMount() {
    console.log('PRIVATE ROUTE BOTH PROPS', this.props);
    this.props.setTarget(this.props.location.pathname);
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => ((rest.loggedInCand || rest.loggedInRef) ?
          <Component {...props} {...rest} /> :
          <Redirect to="/referrerRegister" />)}
      />
    );
  }
}

PrivateRouteBoth.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
  setTarget: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  component: PropTypes.func.isRequired,
};

export default withRouter(PrivateRouteBoth);
