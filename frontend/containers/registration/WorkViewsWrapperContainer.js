import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import IndivJobContainer from './IndivJobContainer';


class WorkViewsWrapperContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ border: '1px solid blue' }}>
      Here is where the individual jobs will go
        <IndivJobContainer />
        <IndivJobContainer />
      </div>
    );
  }
}

export default withRouter(WorkViewsWrapperContainer);
