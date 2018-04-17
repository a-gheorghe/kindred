import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

const OptionsCand = (props) => {
  console.log('all candidate props', props);
  return (
    <div>
      <AuthButton loggedInCand={props.loggedInCand} logoutCand={props.logoutCand} /><br />
      {/* Href attribute linter errors can be ignored. */}
      <Link to="/candidateSelfProfile"> My Profile </Link><br />
      <Link to="/candidateExternalProfile"> See profile from referrer view </Link><br />
      <Link to="/messages"> Messages </Link> <br />
      <Link to="/receivedreferrals"> Referrals Received </Link><br />
    </div>
  );
};

OptionsCand.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.bool.isRequired,
};

export default OptionsCand;
