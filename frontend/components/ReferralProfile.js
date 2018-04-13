import React from 'react';
import AuthButton from './AuthButton'

const ReferralProfile = (props) => {
  console.log('referral profile', props)
  return (
    <div>
      <AuthButton loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
      This is the referral's profile
    </div>
)
}

export default ReferralProfile;
