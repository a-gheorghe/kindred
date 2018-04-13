import React from 'react'
import { Link } from 'react-router-dom'
import AuthButton from './AuthButton'

const OptionsRef = (props) =>  {
  console.log('all candidate props', props )
  return (
    <div>
      <AuthButton loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
      <Link to='/profileRef'> My Profile </Link> <br/>
      <Link to='/messages'> Messages </Link> <br/>
      <Link to='/referrals'> Given Referrals </Link><br/>
    </div>
  )
}

export default OptionsRef;
