import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

const PrivateRouteEmp = ({ component: Component, ...rest  }) => {
  return (
    <Route {...rest}
      render={(props) => rest.authEmp.isAuthenticated === true ?
        <Component {...props}/> :
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />}
      />
  )
}

export default PrivateRouteEmp;
