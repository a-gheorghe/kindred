import React from 'react';
import OptionsCand from './OptionsCand'
import OptionsRef from './OptionsRef'


class CandidateExternalProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log ('cand external profile', this.props)
    if (this.props.loggedInCand){
      return (
        <div>
          <OptionsCand loggedInCand={this.props.loggedInCand} logoutCand={this.props.logoutCand} />
          <div> External view of profile!!!! </div>
          <b>Ana</b><br/>
          <b> Education:</b> MSc University of British Columbia <br/>
          <b> Work Experience: </b> Some work experience here <br/>
        </div>
      )
    } else if (this.props.loggedInRef) {
      return (
        <div>
          <OptionsRef loggedInRef={this.props.loggedInRef} logoutRef={this.props.logoutRef} />
          <div> External view of profile!!!! </div>
          <b>Ana</b><br/>
          <b> Education:</b> MSc University of British Columbia <br/>
          <b> Work Experience: </b> Some work experience here <br/>
        </div>
      )
    }
  }
}

export default CandidateExternalProfile;
