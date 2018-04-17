import React from 'react';
import PropTypes from 'prop-types';

// import AuthButton from './AuthButton';
import OptionsCand from './OptionsCand';

const CandidateSelfProfile = props => (
  <div>
    <OptionsCand loggedInCand={props.loggedInCand} logoutCand={props.logoutCand} />
    <b>Ana</b>
    <br />
    <b> Education:</b> MSc University of British Columbia <br />
    <b> Work Experience: </b> Some work experience here <br /> <br /> <br />
  </div>
);

CandidateSelfProfile.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default CandidateSelfProfile;
