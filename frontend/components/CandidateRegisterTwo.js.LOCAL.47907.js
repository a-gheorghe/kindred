import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import OptionsCand from './OptionsCand';


class CandidateRegisterTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workArray: ['hello', 'goodbye'],
    };
  }

  addWork() {
    this.setState({
      workArray: [...this.state.workArray, ' '],
    });
  }

  render() {
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
          Work Experience <button onClick={this.addWork}> + </button> <br />
          {this.state.workArray.map(workExp => <input type="text" value={workExp} />)}
        </div>
        <br />
          Projects <button> + </button>
        <br />
          Skills and Technologies <button> + </button> <br />
        {/* <Link to='/candidateRegisterTwo'> Next </Link> */}
      </div>
    );
  }
}

CandidateRegisterTwo.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default withRouter(CandidateRegisterTwo);
