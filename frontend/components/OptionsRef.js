import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

const OptionsRef = (props) => {
  console.log('all candidate props', props);
  return (
    <div>
      <AuthButton loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
      {/* Href attribute linter errors can be ignored. */}
      <Link to="/profileRef"> My Profile </Link> <br />
      <Link to="/messages"> Messages </Link> <br />
      <Link to="/allCandidates"> See All Candidates </Link><br />
      <Link to="/referrals"> Given Referrals </Link><br />
    </div>
  );
};

OptionsRef.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
};

export default OptionsRef;
