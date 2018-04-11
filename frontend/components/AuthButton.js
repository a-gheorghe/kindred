import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


class AuthButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  const { history, authCand } = this.props
    if (authCand.isAuthenticated){
      return (
        <p> Welcome!
          <button onClick={() => {
            authCand.signout(() => {
              axios.get('/candidate')
              .then((resp) => {
                (resp)
              })
            })
          }}> Sign out </button>
        </p>
      )
    } else if (authRef.isAuthenticated){
      return (
        <p> Welcome!
          <button onClick={() => {
            authRef.signout(() => {
              axios.get('/app')
              .then((resp) => {
                (resp)
              })
            })
          }}> Sign out </button>
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
