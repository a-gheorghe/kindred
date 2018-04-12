import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


class AuthButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  const { history, loggedInCand, loggedInRef, logoutCand, logoutRef } = this.props
    if (loggedInCand){
      return (
        <p> Welcome!
          <button onClick={logoutCand}> Sign out </button>
        </p>
      )
    } else if (loggedInRef){
      return (
        <p> Welcome!
          <button onClick={logoutRef}> Sign out </button>
        </p>
      )
    } else {
      return (
        <p> You are not logged in </p>
      )
    }
  }
}

export default withRouter(AuthButton);
