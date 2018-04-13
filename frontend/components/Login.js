import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'


// component
class Login extends React.Component {
  constructor(props) {
      super(props);
  }


  render() {
    // const { from } = this.props.location.state || { from: { pathname: '/' } }

    const { loggedInCand, loggedInRef, loginRef, loginCand, target } = this.props
    console.log('target inside login page', target)

    if (loggedInCand === true){
      // if (target === undefined){
      //   return (
      //     <Redirect to={target} />
      //   )
      // } else {
        return (
          <Redirect to='/messages' />
        )
      // }
    } else if (loggedInRef === true){
      // if (target === undefined){
      //   return (
      //     <Redirect to={target} />
      //   )
      // } else {
        return (
          <Redirect to='/messages' />
        )
      } else {
      return (
        <div>
          <p> You must log in to view the page </p>
          <form>
            Username: <input type="text" name="username" /> <br/>
            Password: <input type="password" name="password" />
          </form>
          <button onClick={loginCand}>Login as candidate</button>
          <button onClick={loginRef}>Login as referrer</button>
        </div>
      )
    }
  }
}

export default withRouter(Login);
