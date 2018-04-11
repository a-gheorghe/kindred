import React from 'react';
import AuthButton from './AuthButton'

const CandidateExternalProfile = (props) => {
  return (
    <div>
      <AuthButton authCand={props.authCand} authRef={props.authRef} />
      <div> External view of profile!!!! </div>
      <b>Ana</b><br/>
      <b> Education:</b> BSc Brock University <br/>
      <b> Work Experience: </b> Some work experience here <br/>
      <a href='/app/candidateSelfProfile'> Back to profile </a>
    </div>
)
}

export default CandidateExternalProfile;
