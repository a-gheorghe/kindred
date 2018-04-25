import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ProgressBarEducation from './ProgressBarEducation'

class CandidateRegisterEducation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      degree: '',
      school: '',
      gpa: '',
      major: ''
    }
  }

  handleEducationChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  saveCandidateEducation = () => {
    const currentState = this.state
    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))

    let newCandidateObject = Object.assign({}, currentState, candidateObject)

    localStorage.setItem('candidateObject', JSON.stringify(newCandidateObject))
  }


  render() {
    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))
    console.log('candidate object on education page is: ', candidateObject)
    return (
      <div>
        <ProgressBarEducation />
        <b>Candidate Profile</b>
        <form>
              Current City: <input type="text" name="city" placeholder="Enter city" onChange={this.handleEducationChange} /> <br />
              Highest Level of Education: <input type="text" name="degree" placeholder="Enter degree" onChange={this.handleEducationChange} /> <br />
              Institution Name: <input type="text" name="school" placeholder="Enter school" onChange={this.handleEducationChange} /> <br />
              GPA: <input type="text" name="gpa" placeholder="Enter GPA" onChange={this.handleEducationChange}/> <br />
              Field of Study: <input type="text" name="major" placeholder="Enter major" onChange={this.handleEducationChange} /> <br />
        </form>
        <Link to="/register/cand/profile" onClick={this.saveCandidateEducation}>  Next </Link> {/* Ignore href lint err */}
      </div>
    );
  }
}

CandidateRegisterEducation.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default withRouter(CandidateRegisterEducation);
