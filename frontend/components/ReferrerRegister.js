import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { Input } from 'semantic-ui-react'



class ReferrerRegister extends React.Component {
  constructor(props) {
    super(props);
  }

  // <button onClick={this.props.registerRef}> Register as Employee </button> <br/>
  // <Link to='/login'> Already have an account? Log in! </Link>

  render() {
    console.log('Referrer props', this.props)

    // if (this.props.loggedInRef === true) {
    //   if (this.props.target === '/referrerRegister'){
    //     return (
    //       <Redirect to='/allCandidates'/>
    //     )
    //   } else {
    //       return (
    //         <Redirect to={this.props.target} />
    //       )
    //   }
    // }

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
          Referrer Registration
        </div>
          <div className="registerInputBox">
            <Input className="loginPageInput" placeholder='First Name' />
            <Input className="loginPageInput" placeholder='Last Name' />
            <Input className="loginPageInput" placeholder='Email' />
            <Input className="loginPageInput" placeholder='Password' />
            <Input className="loginPageInput" placeholder='Confirm Password' />
            <button id="registerButton" className="medium ui button">Login</button>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(ReferrerRegister);
