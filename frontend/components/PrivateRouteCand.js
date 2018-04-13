import React, { Component } from 'react'
import { Route, Link, Redirect, withRouter } from 'react-router-dom'


class PrivateRouteCand extends React.Component {

  componentWillMount(){
    this.props.setTarget(this.props.location.pathname)
  }

  render(){
    const { component: Component, ...rest } = this.props
    return (
      <Route {...rest}
        render={(props) => (rest.loggedInCand) ?
          <Component {...props} {...rest} /> :
          <Redirect to='/candidateRegister' />}
      />
    )
  }
}

export default withRouter(PrivateRouteCand);
