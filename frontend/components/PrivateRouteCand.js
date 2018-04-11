import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'


const PrivateRouteCand = ({ component: Component, ...rest  }) => {
  return (
    <Route {...rest}
      render={(props) => rest.authCand.isAuthenticated === true ?
        <Component {...props} {...rest}/> :
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />}
      />
  )
}

export default PrivateRouteCand;
