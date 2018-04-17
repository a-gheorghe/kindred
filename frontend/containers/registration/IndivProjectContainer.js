import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import ProjectForm from '../../components/registration/ProjectForm';
import EditIndivProjectButton from '../../components/registration/EditIndivProjectButton';
import DeleteIndivProjectButton from '../../components/registration/DeleteIndivProjectButton';


class IndivProjectContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructed indiv project container', this.props)
  }

  render() {
    console.log('indiv job container props', this.props)
    return (
      <div style={{ border: '1px solid green' }}>
        <ProjectForm />
        <EditIndivProjectButton />
        <DeleteIndivProjectButton removeProject={this.props.removeProject}/>
      </div>
    );
  }
}

export default withRouter(IndivProjectContainer);
