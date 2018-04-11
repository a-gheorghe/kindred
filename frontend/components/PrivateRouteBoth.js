import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

// ...rest includes all the props passed to PrivateRouteCand itself
// --> so when it returns the <Component with {...props}, it includes those given to PrivateRouteCand
const PrivateRouteBoth = ({ component: Component, ...rest  }) => {
  console.log('Private route both rest', rest)
  return (
    <Route {...rest}
      render={(props) => rest.authCand.isAuthenticated === true || rest.authRef.isAuthenticated === true ?
        <Component {...props} {...rest}/> :
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />}
      />
  )
}

export default PrivateRouteBoth;
