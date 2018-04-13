import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { Input } from 'semantic-ui-react'
import './styles/styles.css'
import SwitchButton from './react-switch-button'

// component
class Login extends React.Component {
  constructor(props) {
      super(props);
}


  render() {
    // const { from } = this.props.location.state || { from: { pathname: '/' } }
    // <button onClick={loginCand}>Login as candidate</button>
    // <button onClick={loginRef}>Login as referrer</button>

    const { loggedInCand, loggedInRef, loginRef, loginCand, target } = this.props
    console.log('target inside login page', target)

    if (loggedInCand === true){
      if (target === undefined){
        return (
          <Redirect to={target} />
        )
      } else {
        return (
          <Redirect to='/candidateSelfProfile' />
        )
      }
    } else if (loggedInRef === true){
      if (target === undefined){
        return (
          <Redirect to={target} />
        )
      } else {
        return (
          <Redirect to='/allCandidates' />
        )
      }
    } else {
      return (
        <div>
          <div className="topnav">
            <div className="logo">
              KINDREDTALENT
            </div>
            <div className="aTag">
              <a>I&apos;m looking</a>
              <a>I&apos;m Referring</a>
              <button id="headerButtom" className="ui button"> Login </button>
            </div>
          </div>
          <div className="blueContainer">
          <div className="login">
            Login
          </div>
            <div className="inputBox">
              <Input className="loginPageInput" placeholder='Email' />
              <Input className="loginPageInput" placeholder='Password' />
              <div className="SwitchButton">
                <SwitchButton name="switch-8" label="Switch mode" mode="select" labelRight="Referrer" label="Candidate"/>
              </div>
              <button id="connect" className="medium ui button">Login</button>
            </div>
          </div>

        </div>
      )
    }
  }
}

export default withRouter(Login);
