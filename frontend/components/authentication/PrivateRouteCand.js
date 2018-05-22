import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';


const PrivateRouteCand = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (rest.loggedInCand === true ?
      <Component {...rest} /> :
      <Redirect to={{
        pathname: '/login',
      }}
      />)
  }
  />);

PrivateRouteCand.propTypes = {
  loggedInTemp: PropTypes.bool.isRequired,
  loggedInCand: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};


export default withRouter(PrivateRouteCand);
