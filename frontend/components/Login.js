import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'


// component
class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        loggedInCand: false,
        loggedInRef: false
      }
    }

  loginCand = () => {
    this.props.authCand.authenticate(() => {
      this.setState(() => ({
        loggedInCand: true
      }))
    })
  }

  loginRef = () => {
    this.props.authRef.authenticate(() => {
      this.setState(() => ({
        loggedInRef: true
      }))
    })
  }


  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { loggedInCand, loggedInRef } = this.state

    if (loggedInRef === true) {
      return (
        <Redirect to={from.pathname}/>
      )
    }

    if (loggedInCand === true) {
      return (
        <Redirect to={from.pathname}/>
      )
    }

    return (
      <div>
        <p> You must log in to view the page </p>
        {/* <form onSubmit={() => this.login()} > */}
        <form>
          Username: <input type="text" name="username" /> <br/>
          Password: <input type="password" name="password" />
          {/* <input type="submit" value="Login"/> */}
        </form>
        <button onClick={this.loginCand}>LOGIN AS CANDIDATE</button>
        <button onClick={this.loginRef}>LOGIN AS REFERRER</button>
      </div>
    )
  }
}

export default withRouter(Login);
