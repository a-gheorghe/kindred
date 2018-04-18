import React from 'react';


const SkillForm = ({ data, onChange, index }) => (
  <div style={{ border: '1px dotted pink' }}>
    Skill: <input type="text" name="skill" value={data.name} onChange={e => { onChange(index, { name: e.target.value})}} />
  </div>
)


export default SkillForm
