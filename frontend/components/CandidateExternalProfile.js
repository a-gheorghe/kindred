import React from 'react';
import OptionsCand from './OptionsCand'
import OptionsRef from './OptionsRef'

const CandidateExternalProfile = (props) => {
  console.log ('cand external profile', props)

  if (props.loggedInCand){
    return (
      <div>
        <OptionsCand loggedInCand={props.loggedInCand} logoutCand={props.logoutCand} />
        <div> External view of profile!!!! </div>
        <b>Ana</b><br/>
        <b> Education:</b> MSc University of British Columbia <br/>
        <b> Work Experience: </b> Some work experience here <br/>
      </div>
    )
  } else if (props.loggedInRef) {
    return (
      <div>
        <OptionsRef loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
        <div> External view of profile!!!! </div>
        <b>Ana</b><br/>
        <b> Education:</b> MSc University of British Columbia <br/>
        <b> Work Experience: </b> Some work experience here <br/>
      </div>
    )
  }
}

export default CandidateExternalProfile;
