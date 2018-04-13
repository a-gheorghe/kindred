import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'


class CandidateRegister extends React.Component {
  constructor(props) {
      super(props);
    }

  render() {
    console.log('Candidate props', this.props)

    if (this.props.loggedInCand === true) {
      if (this.props.target === '/candidateRegister'){
        return (
          <Redirect to='/candidateSelfProfile'/>
        )
      } else {
          return (
            <Redirect to={this.props.target} />
          )
      }
    }

    return (
      <div>
        Register as a candidate looking for a job
          <form>
              Full Name: <input type="text" name="fullname" /> <br/>
              Email: <input type="text" name="email" /> <br/>
              Password: <input type="password" name="password" /> <br/>
          </form>
          <button onClick={this.props.registerCand}> Register as a Candidate </button><br/>
          <Link to='/login'> Already have an account? Log in! </Link>
      </div>
    )
  }
}

export default withRouter(CandidateRegister);
