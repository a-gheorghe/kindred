import React from 'react';
import { withRouter } from 'react-router-dom'
import ProjectForm from './ProjectForm'
import AddProjectButton from './AddProjectButton'

class ProjectWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(){
  }

  shouldComponentUpdate(){
    return true
  }



  render(){
    const { projectArr, addProject, removeProject, onChange, projectFormShown, toggleProjectForm, makeProjectEditable, addProjectCloseForm, addEditedProject } = this.props
    return (
      <div style={{ border: '1px solid purple' }}>
        <h3>Projects</h3>
        {projectArr.length === 0 ? <p> Projects are a great way to show off your skills. Add your first project </p> : ''}
        <div>
          {projectArr.map((project, i) => {
            return (
              project.editable ?
              <ProjectForm i={i} addEditedProject={addEditedProject} title={project.title} description={project.description} projectstart={project.projectstart} photos={project.photos} id={project.id} editable={true} addProjectCloseForm={addProjectCloseForm} editedVersion={true} positionArray={i}/>
             :
            <div style={{border: '1px solid green'}} key={project.id}>
              Title: {project.title} <br/>
              Description: {project.description} <br/>
              Start date: {project.projectstart}<br/>
              {project.photos.length === 0 ? '' :
              <div> Photos:
              {project.photos.map((photo, photoIndex) => <img src={photo.preview} style={{"height": "60px", "width": "50px", "margin": "5px", "border": "1px solid black"}} /> )}</div>}

              <button onClick={(e) => removeProject(project.id, e)}> Delete </button>
              <button onClick={(e) => makeProjectEditable(project.id, e)}> Edit </button>
            </div>
          )})}
        </div>
        {projectFormShown ? <div> <ProjectForm addProjectCloseForm = {addProjectCloseForm} />  </div> : <button onClick={toggleProjectForm}> Add a Project</button>}
      </div>
    )
  }
};

export default withRouter(ProjectWrapper);
