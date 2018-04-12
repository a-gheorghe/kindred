import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'


const PrivateRouteRef = ({ component: Component, ...rest  }) => {
  return (
    <Route {...rest}
      render={(props) => rest.loggedInRef === true ?
        <Component {...props} {...rest}/> :
        <Redirect to={{
          pathname: '/referrerRegister',
          state: { from: props.location }
        }} />}
      />
  )
}

export default PrivateRouteRef;
