import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'


class CandidateRegister extends React.Component {
  constructor(props) {
      super(props);
    }

  render() {
    console.log('Candidate props', this.props)

    if (this.props.loggedInCand === true) {
      console.log('here i am')
      if (this.props.target === '/candidateRegister'){
        console.log('register')
        return (
          <Redirect to='/candidateRegisterOne'/>
        )
      } else {
          console.log('there')
          return (
            <Redirect to={this.props.target} />
          )
      }
    }

    return (
      <div>
        Candidate Registration
          <form>
              First Name: <input type="text" name="firstname" /> <br/>
              Last Name: <input type="text" name="lastname" /> <br/>
              Email: <input type="text" name="email" /> <br/>
              Password: <input type="password" name="password" /> <br/>
              Repeat Password: <input type="password" name="repeatpassword"/> <br/>
          </form>
          <button onClick={this.props.registerCand}> Register as a Candidate </button><br/>
          <Link to='/login'> Already have an account? Log in! </Link>
      </div>
    )
  }
}

export default withRouter(CandidateRegister);
