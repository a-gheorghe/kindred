import React from 'react';
import { withRouter, Route } from 'react-router-dom';

const AddProjectButton = ({ addProject }) => (
  <button onClick={addProject}> Add Project</button>
);
export default withRouter(AddProjectButton);
