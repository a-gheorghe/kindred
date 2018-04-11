import React from 'react';
import AuthButton from './AuthButton'

const CandidateSelfProfile = (props) => {
  return (
    <div>
      <AuthButton authCand={props.authCand} />
      <a href="/app/candidateExternalProfile"> See profile from referrer view </a> <br/>
      <b>Ana</b><br/>
      <b> Education:</b> BSc Brock University <br/>
      <b> Work Experience: </b> Some work experience here <br/> <br/> <br/>
      <a href='/app/messages'> Messages </a>
    </div>
)
}

export default CandidateSelfProfile;
