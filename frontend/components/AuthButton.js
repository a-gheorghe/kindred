import React from 'react'
import { withRouter } from 'react-router-dom'


class AuthButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { history, auth } = this.props
    console.log('this.props is: ', this.props)
    console.log('history is: ', history)
    if (auth.isAuthenticated){
      return (
        <p> Welcome!
          <button onClick={() => {
            auth.signout(() => history.push('/'))
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
