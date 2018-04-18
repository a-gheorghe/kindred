import React from 'react';
import { withRouter } from 'react-router-dom'
import WorkExpForm from './WorkExpForm'
import AddWorkButton from './AddWorkButton'

const ExperienceWrapper = ({ workExpArr, addWork, removeWork, onChange}) => (
  <div style={{ border: '1px solid black' }}>
    <h3>Work Experience</h3>
    {workExpArr.length === 0 ? <p> Add first work experience </p> : ''}
    {workExpArr.map((data, i) => (
      <div style={{border: '1px solid green'}} key={data.id}>
        <WorkExpForm data={data} onChange={onChange} index={i}  />
        <button onClick={(e) => removeWork(data.id, e)}> Delete </button>
      </div>
    ))}
    <AddWorkButton addWork={addWork}/>
  </div>
);

export default withRouter(ExperienceWrapper);
