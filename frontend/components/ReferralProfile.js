import React from 'react';
import { withRouter } from 'react-router-dom';

const ReferralProfile = (props) => {
  console.log('referral profile', props);
  return (
    <div>
      This is the referrer&apos;s profile
    </div>
  );
};

export default withRouter(ReferralProfile);
