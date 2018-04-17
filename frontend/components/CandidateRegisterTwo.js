import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import OptionsCand from './OptionsCand';
import WorkExperience from './WorkExperience';

class CandidateRegisterTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workExperiences: [],
    };
  }

  addWork = () => {
    const workExperiences = this.state.workExperiences.concat(WorkExperience);
    this.setState({ workExperiences });
  }

  removeWork = (id) => {
    const workExperiences = this.state.workExperiences.slice();
    workExperiences.splice(id, 1);
    this.setState({ workExperiences });
  }

  render() {
    const workExperiences = this.state.workExperiences.map((WorkExperience, index) => {
      return (
        <div key={ index }>
          <WorkExperience index={ index } removeWork={this.removeWork} />
        </div>);
    });

    return (
      <div>
        <OptionsCand
          loggedInCand={this.props.loggedInCand}
          logoutCand={this.props.logoutCand}
        />
        <br />
        <b>Candidate Profile</b>
        <br />
        <div>
          <b> Work Experience: </b><button onClick={this.addWork}> + </button> <br />
          { workExperiences }
        </div>
        {/* <br />
          Projects <button> + </button>
        <br />
          Skills and Technologies <button> + </button> <br /> */}
        {/* <Link to='/candidateRegisterTwo'> Next </Link> */}
        <OptionsCand
          loggedInCand={this.props.loggedInCand}
          logoutCand={this.props.logoutCand}
        />
        <br/>
        <b>Candidate Profile</b><br/>
        <div>
          <b> Work Experience: </b>
          <button onClick={ this.addWork }>+</button><br/>
          { workExperiences }
        </div>
      </div>
    );
  }
}

CandidateRegisterTwo.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default withRouter(CandidateRegisterTwo);
