import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import WorkExpForm from '../../components/registration/WorkExpForm';
import EditIndivExpButton from '../../components/registration/EditIndivExpButton';
import DeleteIndivExpButton from '../../components/registration/DeleteIndivExpButton';


class IndivJobContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ border: '1px solid green' }}>
        <WorkExpForm />
        <EditIndivExpButton />
        <DeleteIndivExpButton />
      </div>
    );
  }
}

export default withRouter(IndivJobContainer);
