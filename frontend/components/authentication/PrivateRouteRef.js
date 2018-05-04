import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteRef = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (rest.loggedInRef === true ?
      <Component {...props} {...rest} /> :
      <Redirect to={{
          pathname: '/login',
          // state: { from: props.location },
        }}
      />
      )}
  />
);

PrivateRouteRef.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  // location: PropTypes.shape({
  //   pathname: PropTypes.string,
  // }),
  component: PropTypes.func.isRequired,
};

// PrivateRouteRef.defaultType

export default PrivateRouteRef;
