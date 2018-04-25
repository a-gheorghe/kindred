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
        type: ''
      }
    }

  handleBothChange = (event) => {
    console.log('handleBothChange', this.state)
    let change={}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  registerCandStorage = () => {
    localStorage.setItem('candidateObject', JSON.stringify(this.state))
    this.props.registerCand()
  }


  render() {
    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))
    if (this.props.loggedInCand === true) {
      return <Redirect to='/register/cand/education'/>
    }

    if (this.props.loggedInRef === true) {
      return <Redirect to='/messages'/>
    }

    return (
      <div>
        All registration<br/>
              First Name: <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleBothChange} /> <br/>
              Last Name: <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleBothChange}/> <br/>
              Email: <input type="text" name="email" value={this.state.email} onChange={this.handleBothChange}/> <br/>
              Password: <input type="password" name="password" value={this.state.password} onChange={this.handleBothChange}/> <br/>
              Repeat Password: <input type="password" name="repeatpassword" value={this.state.repeatpassword} onChange={this.handleBothChange}/> <br/>
          <select value={this.state.type} onChange={this.handleBothChange} name="type" >
            <option value="" defaultValue disabled hidden> Choose One </option>
            <option value="candidate"> Candidate </option>
            <option value="referrer"> Referrer </option>
          </select>
          {this.state.type === "referrer" ? <button onClick={this.props.registerRef}> Sign Up as a Referrer </button> :
          this.state.type === "candidate" ? <button onClick={this.registerCandStorage}> Sign Up as a Candidate </button> :
          <button> Sign Up </button> }
          <Link to='/login'> Already have an account? Log in! </Link>
      </div>
    )
  }
}

export default withRouter(RegisterBoth);
