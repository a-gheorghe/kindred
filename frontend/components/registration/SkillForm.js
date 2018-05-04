import React from 'react';

const SkillForm = ({ data, onChange, index }) => (
  <div style={{ border: '1px dotted pink' }}>
    Skill: <input type="text" name="skill" value={data.skill} onChange={e => { onChange(index, { skill: e.target.value})}} />
  </div>
);

export default SkillForm;
