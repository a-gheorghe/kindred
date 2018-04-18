import React from 'react';
import { withRouter } from 'react-router-dom'
import SkillForm from './SkillForm'
import AddSkillButton from './AddSkillButton'

const SkillWrapper = ({ skillArr, addSkill, removeSkill, onChange}) => (
  <div style={{ border: '1px solid black' }}>
    <h3>Skills</h3>
    {skillArr.length === 0 ? <p> What skills do you have? </p> : ''}
    {skillArr.map((data, i) => (
      <div style={{border: '1px solid green'}} key={data.id}>
        <SkillForm data={data} onChange={onChange} index={i}  />
        <button onClick={(e) => removeSkill(data.id, e)}> Delete </button>
      </div>
    ))}
    <AddSkillButton addSkill={addSkill}/>
  </div>
);

export default withRouter(SkillWrapper);
