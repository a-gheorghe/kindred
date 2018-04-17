import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import OptionsCand from './OptionsCand';


class CandidateRegisterOne extends React.Component {
  // Ignore linter errors: additional methods will go here; not necessary to
  // switch to pure function. <--- Delete me when new methods are added.

  render() {
    return (
      <div>
        <OptionsCand
          loggedInCand={this.props.loggedInCand}
          logoutCand={this.props.logoutCand}
        />
        <br />
        <b>Candidate Profile</b>
        <form>
              City: <input type="text" name="city" /> <br />
              Highest Degree Obtained: <input type="text" name="degree" /> <br />
              School Name: <input type="password" name="school" /> <br />
              GPA: <input type="text" name="gpa" /> <br />
              Field of Study: <input type="text" name="" /> <br />
              Picture: attachment here <br />
              Resume: attachment here <br />
        </form>
        <Link to="/candidateRegisterTwo"> Next </Link> {/* Ignore href lint err */}
      </div>
    );
  }
}

CandidateRegisterOne.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default withRouter(CandidateRegisterOne);
