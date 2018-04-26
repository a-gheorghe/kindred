import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'
import Container from '../Container'
import Footer from '../Footer'
import Header from '../Header'
import { Dropdown, Button } from 'semantic-ui-react'

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
    localStorage.setItem('candidateObject', JSON.stringify({
      basic: {
        first_name: this.state.firstname,
        last_name: this.state.lastname,
        email: this.state.email,
        password: this.state.password
      }
    }))

    this.props.registerCand()
  }


  render() {

    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))
    console.log('candidate object on register both page', candidateObject)
    if (this.props.loggedInCand === true) {
      return <Redirect to='/register/cand/education'/>
    }

    if (this.props.loggedInRef === true) {
      return <Redirect to='/messages'/>
    }

    let options = [
      { key: 'Referrer', text: 'Referrer', value: 'referrer' },
      { key: 'Candidate', text: 'Candidate', value: 'candidate' },
    ]
    // <option value="candidate"> Candidate </option>
    // <option value="referrer"> Referrer </option>
    return (
      <div className="maindiv">
        <Header />
        <img src="../background.svg" style={{position: 'fixed', bottom: '0px', width: '100%', zIndex: '-1'}}/>
        <Container>
          <div className="regDiv">
            <div className="regHeader">Sign up for KindredTalent</div>
            <input style={{marginBottom: "5px"}} placeholder="First Name" className="loginInput" type="text" name="firstname" value={this.state.firstname} onChange={this.handleBothChange} /> <br/>
            <input style={{marginBottom: "5px"}} placeholder="Last Name" className="loginInput" type="text" name="lastname" value={this.state.lastname} onChange={this.handleBothChange}/> <br/>
            <input style={{marginBottom: "5px"}} placeholder="Email" className="loginInput" type="text" name="email" value={this.state.email} onChange={this.handleBothChange}/> <br/>
            <input style={{marginBottom: "5px"}} placeholder="Password" className="loginInput" type="password" name="password" value={this.state.password} onChange={this.handleBothChange}/> <br/>
            <input style={{marginBottom: "5px"}} placeholder="Confirm Password" className="loginInput" type="password" name="repeatpassword" value={this.state.repeatpassword} onChange={this.handleBothChange}/> <br/>
            <Dropdown className="regDrop" placeholder="Choose One" fluid selection options={options} value={this.state.type} onChange={this.handleBothChange} />

            {this.state.type === "referrer" ? <button onClick={this.props.registerRef}> Sign Up as a Referrer </button> :
            this.state.type === "candidate" ? <button onClick={this.props.registerCand}> Sign Up as a Candidate </button> :
            <Button className="loginButton"> Sign Up </Button> }
          </div>
          {/* <button onClick={this.props.registerCand}> Register as a Candidate </button><br/> */}
          <div className="loginSignup">
            Already have an account? <a className="loginASign" href="/app/login">Sign in</a>
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default withRouter(RegisterBoth);
