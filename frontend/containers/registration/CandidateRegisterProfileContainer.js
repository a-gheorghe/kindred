import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import ProgressBarProfile from '../../components/registration/ProgressBarProfile';
import ExperienceWrapper from '../../components/registration/ExperienceWrapper';

class CandidateRegisterProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('candidate register profile container this.props', this.props);
    return (
      <div>
        <ProgressBarProfile />
        <ExperienceWrapper />

      </div>
    );
  }
}

export default withRouter(CandidateRegisterProfileContainer);
