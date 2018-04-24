import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'


class RegisterBoth extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeatpassword: '',
        type: 'Choose One'
      }
    }

  handleFirstNameChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({firstname: event.target.value})
  }

  handleLastNameChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({lastname: event.target.value})
  }

  handleEmailChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({email: event.target.value})
  }

  handlePasswordChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({password: event.target.value})
  }

  handleRepeatPasswordChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({repeatpassword: event.target.value})
  }

  handleTypeChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({type: event.target.value})
}

  render() {
    if (this.props.loggedInCand === true) {
      return <Redirect to='/register/candidate/education'/>
    }

    if (this.props.loggedInRef === true) {
      console.log('referrer is logged in')
      return <Redirect to='/messages'/>
    }

    return (
      <div>
        All registration<br/>
              First Name: <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleFirstNameChange} /> <br/>
              Last Name: <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleLastNameChange}/> <br/>
              Email: <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange}/> <br/>
              Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/> <br/>
              Repeat Password: <input type="password" name="repeatpassword" value={this.state.repeatpassword} onChange={this.handleRepeatPasswordChange}/> <br/>
          <select value={this.state.type} onChange={this.handleTypeChange} >
            <option value="candidate"> Candidate </option>
            <option value="referrer"> Referrer </option>
          </select>
          {this.state.type === "referrer" ? <button onClick={this.props.registerRef}> Sign Up as a Referrer </button> :
          this.state.type === "candidate" ? <button onClick={this.props.registerCand}> Sign Up as a Candidate </button> :
          <button> Sign Up </button> }
          {/* <button onClick={this.props.registerCand}> Register as a Candidate </button><br/> */}
          <Link to='/login'> Already have an account? Log in! </Link>
      </div>
    )
  }
}

export default withRouter(RegisterBoth);
