import React from 'react';
import PropTypes from 'prop-types';

import OptionsRef from './OptionsRef';
import Referral from './Referral';

const GivenReferrals = (props) => {
  return (
    <div>
      <OptionsRef loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
      Referrals given:
      <Referral /> <br />
      <Referral /> <br />
      <Referral /> <br />
    </div>
  );
};

GivenReferrals.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
};

export default GivenReferrals;
