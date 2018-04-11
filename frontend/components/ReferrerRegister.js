import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'


class EmployeeRegister extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        loggedInRef: false
      }
    }

// save employee to database
// set this.state.loggedIn to true
// set this.state.referrerRegistered to true
registerEmployee = () => {
  this.props.authRef.authenticate(() => {
    this.setState(() => ({
      loggedInRef: true
    }))
  })
}

  render() {
    const { loggedInEmp } = this.state
    if (loggedInEmp === true) {
      return (
        <Redirect to='/allCandidates'/>
      )
    }

    return (
      <div>
        Register an employeee looking to refer candidates
        <form>
            Full Name: <input type="text" name="fullname" /> <br/>
            Current Company: <input type="text" name="company" /> <br/>
            Email: <input type="text" name="email" /> <br/>
            Password: <input type="password" name="password" /> <br/>
        </form>
            <button onClick={this.registerEmployee}> Register as Employee </button> <br/>
            <Link to='/login'> Already have an account? Log in! </Link>

      </div>
    )
  }
}

export default EmployeeRegister;
