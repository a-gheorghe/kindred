import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'


class CandidateRegister extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        loggedInCand: false
      }
    }

// save candidate to database
// set this.state.loggedIn to true
// set this.state.employeeRegistered to true
registerCandidate = () => {
  this.props.authCand.authenticate(() => {
    this.setState(() => ({
      loggedInCand: true
    }))
  })
}

  render() {
    const { loggedInCand } = this.state
    if (loggedInCand === true) {
      return (
        <Redirect to='/candidateSelfProfile'/>
      )
    }

    return (
      <div>
        Register as a candidate looking for a job
          <form>
              Full Name: <input type="text" name="fullname" /> <br/>
              Email: <input type="text" name="email" /> <br/>
              Password: <input type="password" name="password" /> <br/>
          </form>
          <button onClick={this.registerCandidate}> Register as a Candidate </button>
          <Link to='/login'> Already have an account? Log in! </Link>
      </div>
    )
  }
}

export default CandidateRegister;
