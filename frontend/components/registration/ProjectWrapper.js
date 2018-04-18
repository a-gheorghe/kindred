import React from 'react';
import { withRouter } from 'react-router-dom'
import ProjectForm from './ProjectForm'
import AddProjectButton from './AddProjectButton'

const ProjectWrapper = ({ projectArr, addProject, removeProject, onChange}) => (
  <div style={{ border: '1px solid black' }}>
    <h3>Projects</h3>
    {projectArr.length === 0 ? <p> Projects are a great way to show off your skills. Add your first project </p> : ''}
    {projectArr.map((data, i) => (
      <div style={{border: '1px solid green'}} key={data.id}>
        <ProjectForm data={data} onChange={onChange} index={i}  />
        <button onClick={(e) => removeProject(data.id, e)}> Delete </button>
      </div>
    ))}
    <AddProjectButton addProject={addProject}/>
  </div>
);

export default withRouter(ProjectWrapper);
