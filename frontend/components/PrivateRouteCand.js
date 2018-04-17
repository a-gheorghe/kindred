import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';


class PrivateRouteCand extends React.Component {
  componentWillMount() {
    console.log('private route cand this.props', this.props);
    this.props.setTarget(this.props.location.pathname);
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => ((rest.loggedInCand) ?
          <Component {...props} {...rest} /> :
          <Redirect to="/candidateRegister" />)}
      />
    );
  }
}

PrivateRouteCand.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.bool.isRequired,
  setTarget: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  component: PropTypes.func.isRequired,
};

export default withRouter(PrivateRouteCand);
