import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteRef = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (rest.loggedInRef === true ?
      <Component {...props} {...rest} /> :
      <Redirect to={{
          pathname: '/referrerRegister',
          state: { from: props.location },
        }}
      />
      )}
  />
);

PrivateRouteRef.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRouteRef;
