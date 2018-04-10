import React from 'react'
import { withRouter } from 'react-router-dom'


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
            authCand.signout(() => history.push('/'))
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
