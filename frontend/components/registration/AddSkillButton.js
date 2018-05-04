import React from 'react';
import { withRouter, Route } from 'react-router-dom';

const AddSkillButton = ({ addSkill, onChange, data, index }) => (
  <div style={{ border: '1px solid blue' }}>
    <input type="text" onChange={onChange} value="" />
    <button onClick={addSkill}> Add Skill</button>
  </div>
);
export default withRouter(AddSkillButton);
