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
      graduation: '',
      major: ''
    }
  }

  handleEducationChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  saveCandidateEducation = () => {
    let candidateObject = JSON.parse(localStorage.getItem('candidateObject'))
    candidateObject.basic.location = this.state.city
    candidateObject.eduArr = [{
      school_name: this.state.school,
      degree: this.state.degree,
      major: this.state.major,
      graduation: this.state.graduation
    }]
    console.log('candidate object here', candidateObject)

    let newCandidateObject = Object.assign({}, candidateObject)
    candidateObject = localStorage.setItem('candidateObject', JSON.stringify(newCandidateObject))
  }


  render() {
    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))
    console.log('candidate object inside education', candidateObject)
    return (
      <div>
        <ProgressBarEducation />
        <b>Candidate Profile</b>
        <form>
              Current City: <input type="text" name="city" placeholder="Enter city" onChange={this.handleEducationChange} /> <br />
              Highest Level of Education: <input type="text" name="degree" placeholder="Enter degree" onChange={this.handleEducationChange} /> <br />
              Institution Name: <input type="text" name="school" placeholder="Enter school" onChange={this.handleEducationChange} /> <br />
              Graduation: <input type="text" name="graduation" placeholder="Enter graduation date" onChange={this.handleEducationChange}/> <br />
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
