import React from 'react';
import { withRouter, Route } from 'react-router-dom';

const AddSkillButton = ({ addSkill }) => (
  <button onClick={addSkill}> Add Skill</button>
)
export default withRouter(AddSkillButton);
