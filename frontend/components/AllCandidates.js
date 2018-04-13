import React from 'react'
import ShortBio from './ShortBio'
import AuthButton from './AuthButton'
import OptionsRef from './OptionsRef'

const AllCandidates = (props) =>  {
  console.log('all candidate props', props )
  return (
    <div>
      <OptionsRef loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
      Here are all the candidates
      <ShortBio /> <br/>
      <ShortBio /> <br/>
      <ShortBio /> <br/>
      <ShortBio /> <br/>
    </div>
  )
}

export default AllCandidates;
