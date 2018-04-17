import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import AddWorkButton from '../../components/registration/AddWorkButton';
import WorkViewsWrapperContainer from './WorkViewsWrapperContainer';


class WorkExperienceContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ border: '1px solid red' }}>
        <WorkViewsWrapperContainer />
        <AddWorkButton />
      </div>
    );
  }
}

export default withRouter(WorkExperienceContainer);
