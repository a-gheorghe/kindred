import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import IndivProjectContainer from './IndivJobContainer';


class ProjectViewsWrapperContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('project views wrapper container props', this.props)
    return (
      <div style={{ border: '1px solid blue' }}>
        {this.props.children[1].length === 0 ? <div> Add your first project </div> : this.props.children}
      </div>
    );
  }
}

export default withRouter(ProjectViewsWrapperContainer);
