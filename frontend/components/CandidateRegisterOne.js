import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'
import OptionsCand from './OptionsCand'


class CandidateRegisterOne extends React.Component {
  constructor(props) {
      super(props);
    }

  render() {
    return (
      <div>
        <OptionsCand loggedInCand={this.props.loggedInCand} logoutCand={this.props.logoutCand}/> <br/>
          <b>Candidate Profile</b>
          <form>
              City: <input type="text" name="city" /> <br/>
              Highest Degree Obtained: <input type="text" name="degree" /> <br/>
              School Name: <input type="password" name="school" /> <br/>
              GPA: <input type="text" name="gpa" /> <br/>
              Field of Study: <input type="text" name="" /> <br/>
              Picture: attachment here <br/>
              Resume: attachment here <br/>
          </form>
          <Link to='/candidateRegisterTwo'> Next </Link>
      </div>
    )
  }
}

export default withRouter(CandidateRegisterOne);
