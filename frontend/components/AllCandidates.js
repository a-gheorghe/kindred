import React from 'react';
import PropTypes from 'prop-types';

import ShortBio from './ShortBio';
// import AuthButton from './AuthButton';
import OptionsRef from './OptionsRef';


const AllCandidates = (props) => {
  return (
    <div>
      <OptionsRef
        loggedInRef={props.loggedInRef}
        logoutRef={props.logoutRef}
      />
      Here are all the candidates
      <ShortBio /> <br />
      <ShortBio /> <br />
      <ShortBio /> <br />
      <ShortBio /> <br />
    </div>
  );
};

AllCandidates.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
};

export default AllCandidates;
