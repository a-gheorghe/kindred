import React from 'react';
import OptionsCand from './OptionsCand'
import Referral from './Referral'

const ReceivedReferrals = (props) => {
  console.log('received referrals props', props)
  return (
    <div>
      <OptionsCand loggedInCand={props.loggedInCand} logoutCand={props.logoutCand} />
      Referrals received:
        <Referral /> <br/>
        <Referral /> <br/>
        <Referral /> <br/>
    </div>
)
}

export default ReceivedReferrals;
