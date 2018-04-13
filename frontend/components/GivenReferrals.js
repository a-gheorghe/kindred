import React from 'react';
import OptionsRef from './OptionsRef'
import Referral from './Referral'

const GivenReferrals = (props) => {
  console.log('given referrals props', props)
  return (
    <div>
      <OptionsRef loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
      Referrals given:
        <Referral /> <br/>
        <Referral /> <br/>
        <Referral /> <br/>
    </div>
)
}

export default GivenReferrals;
