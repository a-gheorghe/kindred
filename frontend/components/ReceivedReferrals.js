import React from 'react';
import PropTypes from 'prop-types';
import OptionsCand from './authentication/OptionsCand';
import Referral from './Referral';

const ReceivedReferrals = (props) => {
  return (
    <div>
      <OptionsCand loggedInCand={props.loggedInCand} logoutCand={props.logoutCand} />
      Referrals received:
      <Referral /> <br />
      <Referral /> <br />
      <Referral /> <br />
    </div>
  );
};

ReceivedReferrals.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default ReceivedReferrals;
