import React from 'react';
import PropTypes from 'prop-types';
import OptionsRef from './OptionsRef';

const ReferralProfile = (props) => {
  console.log('referral profile', props);
  return (
    <div>
      <OptionsRef loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
      This is the referral&apos;s profile
    </div>
  );
};

ReferralProfile.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
};

export default ReferralProfile;
