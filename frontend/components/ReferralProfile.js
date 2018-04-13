import React from 'react';
import OptionsRef from './OptionsRef'

const ReferralProfile = (props) => {
  console.log('referral profile', props)
  return (
    <div>
      <OptionsRef loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
      This is the referral's profile
    </div>
)
}

export default ReferralProfile;
