import React from 'react';
import PropTypes from 'prop-types';

import OptionsCand from './authentication/OptionsCand';
import OptionsRef from './authentication/OptionsRef';

class CandidateExternalProfile extends React.Component {
  // Ignore linter errors: additional methods will go here; not necessary to
  // switch to pure function. <--- Delete me when new methods are added.

  render() {
    if (this.props.loggedInCand) {
      return (
        <div>
          <OptionsCand loggedInCand={this.props.loggedInCand} logoutCand={this.props.logoutCand} />
          <div> External view of profile!!!! </div>
          <b>Ana</b><br />
          <b> Education:</b> MSc University of British Columbia <br />
          <b> Work Experience: </b> Some work experience here <br />
        </div>
      );
    } else if (this.props.loggedInRef) {
      return (
        <div>
          <OptionsRef loggedInRef={this.props.loggedInRef} logoutRef={this.props.logoutRef} />
          <div> External view of profile!!!! </div>
          <b>Ana</b><br />
          <b> Education:</b> MSc University of British Columbia <br />
          <b> Work Experience: </b> Some work experience here <br />
        </div>
      );
    }
    return (
      <div>Please log in to view profiles.</div>
    );
  }
}


CandidateExternalProfile.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default CandidateExternalProfile;
