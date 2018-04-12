import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

const PrivateRouteBoth = ({ component: Component, ...rest  }) => {
  return (
    <Route {...rest}
      render={(props) => (rest.loggedInCand || rest.loggedInRef) ?
        <Component {...props} {...rest}/> :
        <Redirect to={{
          pathname: '/referrerRegister',
          state: { from: props.location }
        }} />}
      />
  )
}

export default PrivateRouteBoth;
