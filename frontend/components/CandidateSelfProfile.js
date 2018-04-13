import React from 'react';
import AuthButton from './AuthButton'
import OptionsCand from './OptionsCand'

const CandidateSelfProfile = (props) => {
  return (
    <div>
      <OptionsCand loggedInCand={props.loggedInCand} logoutCand={props.logoutCand}/>
      <b>Ana</b><br/>
      <b> Education:</b> MSc University of British Columbia <br/>
      <b> Work Experience: </b> Some work experience here <br/> <br/> <br/>
    </div>
  )
}

export default CandidateSelfProfile;
