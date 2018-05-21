import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';
import { Dropdown, Button } from 'semantic-ui-react';
import axios from 'axios';

import '../styles/styles.css';

class RegisterBoth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      repeatpassword: '',
      title: '',
      type: '',
    };
  }

  handleBothChange = (event) => {
    // console.log('handleBothChange', this.state);
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };

  handleTypeChange = (event, data) => {
    // console.log('event is ', event, 'data is ', data);
    this.setState({ type: data.value });
  };

  registerCandStorage = () => {
    localStorage.setItem('candidateObject', JSON.stringify({
      basic: {
        first_name: this.state.firstname,
        last_name: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        title: this.state.title,
      },
    }));

    this.props.history.push('/register/cand/education');

    // this.props.tempLogin();
  }

  clickRegisterRef = () => {
    if (this.state.password === this.state.repeatpassword) {
      const ref = {
        first_name: this.state.firstname,
        last_name: this.state.lastname,
        email: this.state.email,
        title: this.state.title,
        password: this.state.password,
        company: 'unspecified'
      };
      console.log('ref', ref);
      this.props.registerRef(ref)
        .then(() => {
          if (this.props.loggedInRef) {
            this.props.history.push('/ref/my/profile');
          }
        })
        .catch((e) => {
          console.log('something went wrong inside registerBoth');
          console.log(e);
        });
    } else {
      alert('Passwords must match! Try again.');
    }
  };

  render() {
    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'));
    const options = [
      { key: 'Referrer', text: 'Referrer', value: 'referrer' },
      { key: 'Candidate', text: 'Candidate', value: 'candidate' },
    ];

    if (this.props.loggedInRef) {
      console.log('referrer is logged in');
      return <Redirect to="/ref/my/profile" />;
    }

    return (
      <div className="maindiv">
        <Header />
        <img
          src="../background.svg"
          style={{
position: 'fixed', bottom: '0px', width: '100%', zIndex: '-1',
}}
        />
        <Container>
          <div className="regDiv">
            <div className="regHeader">Sign up for KindredTalent</div>
            <input style={{ marginBottom: '5px' }} placeholder="First Name" className="loginInput" type="text" name="firstname" value={this.state.firstname} onChange={this.handleBothChange} /> <br />
            <input style={{ marginBottom: '5px' }} placeholder="Last Name" className="loginInput" type="text" name="lastname" value={this.state.lastname} onChange={this.handleBothChange} /> <br />
            <input style={{ marginBottom: '5px' }} placeholder="Title (eg. Front-End Engineer)" className="loginInput" type="text" name="title" value={this.state.title} onChange={this.handleBothChange} /> <br />
            <input style={{ marginBottom: '5px' }} placeholder="Email" className="loginInput" type="text" name="email" value={this.state.email} onChange={this.handleBothChange} /> <br />
            <input style={{ marginBottom: '5px' }} placeholder="Password" className="loginInput" type="password" name="password" value={this.state.password} onChange={this.handleBothChange} /> <br />
            <input style={{ marginBottom: '5px' }} placeholder="Confirm Password" className="loginInput" type="password" name="repeatpassword" value={this.state.repeatpassword} onChange={this.handleBothChange} /> <br />
            <Dropdown className="regDrop" placeholder="Choose One" fluid selection options={options} value={this.state.type} onChange={this.handleTypeChange} />

            {/* Change button to call registerCand if Cand or registerRef if Ref */}
            {this.state.type === 'referrer' ?
              <button
                className="loginButton"
                style={{ marginBottom: '30px' }}
                onClick={this.clickRegisterRef}
              >
                Sign Up as a Referrer
              </button> :
              this.state.type === 'candidate' ?
                <button
                  className="loginButton"
                  style={{ marginBottom: '30px' }}
                  onClick={this.registerCandStorage}
                >
                  Sign Up as a Candidate
                </button> :
                <Button
                  className="loginButton"
                  style={{ marginBottom: '30px' }}
                >
                  Sign Up
                </Button> }
          </div>
          {/* <button onClick={this.props.registerCand}> Register as a Candidate </button><br/> */}
          <div className="loginSignup">
            Already have an account? <a className="loginASign" href="/app/login">Sign in</a>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withRouter(RegisterBoth);
