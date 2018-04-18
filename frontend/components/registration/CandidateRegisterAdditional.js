import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ProgressBarAdditional from './ProgressBarAdditional'

class CandidateRegisterAdditional extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      github: '',
      linkedin: '',
      website: '',
      selfbio: ''
    }
  }

  handleAdditionalChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }



  render() {
    return (
      <div>
        <ProgressBarAdditional />
              Github URL: <input type="text" name="github" placeholder="Github URL" onChange={this.handleAdditionalChange} /> <br />
              Linkedin URL: <input type="text" name="linkedin" placeholder="LinkedIn URL" onChange={this.handleAdditionalChange} /> <br />
              Personal Website URL <input type="text" name="website" placeholder="Personal Website URL" onChange={this.handleAdditionalChange} /> <br />
              Tell us about yourself: <textarea type="text" name="selfbio" onChange={this.handleAdditionalChange} placeholder="Tell us about yourself"> </textarea>
        <Link to=""> Done </Link>
      </div>
    );
  }
}

CandidateRegisterAdditional.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default withRouter(CandidateRegisterAdditional);
