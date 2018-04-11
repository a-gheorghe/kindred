import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

const PrivateRouteRef = ({ component: Component, ...rest  }) => {
  return (
    <Route {...rest}
      render={(props) => (rest.authRef.isAuthenticated === true && ("props",  props)) ?
        <Component {...props}/> :
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />}
      />
  )
}

export default PrivateRouteRef;
