import React from 'react';
import { withRouter, Route } from 'react-router-dom';

const AddWorkButton = ({ addWork }) => (
  <button onClick={addWork}> Add Work Experience </button>
);
export default withRouter(AddWorkButton);
