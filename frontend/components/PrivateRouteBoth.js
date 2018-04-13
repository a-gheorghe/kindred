import React, { Component } from 'react'
import { Route, Link, Redirect, withRouter } from 'react-router-dom'

class PrivateRouteBoth extends React.Component {

  componentWillMount(){
    console.log('PRIVATE ROUTE BOTH PROPS', this.props)
    this.props.setTarget(this.props.location.pathname)
  }

  render(){
    const { component: Component, ...rest  } = this.props
    return (
      <Route {...rest}
        render={(props) => (rest.loggedInCand || rest.loggedInRef) ?
          <Component {...props} {...rest} /> :
          <Redirect to= '/referrerRegister' />}
        />
    )
  }
}

export default withRouter(PrivateRouteBoth);
