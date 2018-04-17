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

  handleCityChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({city: event.target.value})
  }

  handleDegreeChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({degree: event.target.value})
  }

  handleSchoolChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({school: event.target.value})
  }

  handleGpaChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({gpa: event.target.value})
  }

  handleMajorChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({major: event.target.value})
  }

  saveCandidateEducation = () => {
    console.log('saving candidate info')
  }


  render() {
    return (
      <div>
        <ProgressBarEducation />
        <b>Candidate Profile</b>
        <form>
              Current City: <input type="text" name="city" placeholder="Enter city" onChange={this.handleCityChange} /> <br />
              Highest Level of Education: <input type="text" name="degree" placeholder="Enter degree" onChange={this.handleDegreeChange} /> <br />
              Institution Name: <input type="text" name="school" placeholder="Enter school" onChange={this.handleSchoolChange} /> <br />
              GPA: <input type="text" name="gpa" placeholder="Enter GPA" onChange={this.handleGpaChange}/> <br />
              Field of Study: <input type="text" name="major" placeholder="Enter major" onChange={this.handleMajorChange} /> <br />
        </form>
        <Link to="/register/candidate/profile" onClick={this.saveCandidateEducation}>  Next </Link> {/* Ignore href lint err */}
      </div>
    );
  }
}

CandidateRegisterEducation.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default withRouter(CandidateRegisterEducation);
