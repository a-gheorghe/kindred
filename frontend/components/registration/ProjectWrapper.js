import React from 'react';
import { withRouter } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import AddProjectButton from './AddProjectButton';

class ProjectWrapper extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      projectArr,
      addProject,
      removeProject,
      onChange,
      projectFormShown,
      toggleProjectForm,
      makeProjectEditable,
      addProjectCloseForm,
      addEditedProject,
    } = this.props;
    return (
      <div>
        <div>
          {projectArr.map((project, i) => (
              project.editable ?
                <ProjectForm
                  i={i}
                  addEditedProject={addEditedProject}
                  title={project.title}
                  description={project.description}
                  start_date={project.start_date}
                  end_date={project.end_date}
                  current={project.current}
                  link={project.link}
                  id={project.id}
                  editable
                  addProjectCloseForm={addProjectCloseForm}
                  editedVersion
                  positionArray={i}
                />
             :
                <div style={{ border: '1px solid green' }} key={project.id}>
              Title: {project.title} <br />
              Description: {project.description} <br />
              Start date: {project.start_date}<br />
              End date: {project.end_date}<br />
              Current: {project.current}<br />
              Link: {project.link}<br />
                  <button onClick={e => removeProject(project.id, e)}> Delete </button>
                  <button onClick={e => makeProjectEditable(project.id, e)}> Edit </button>
                </div>
          ))}
        </div>
        {projectFormShown ? <div> <ProjectForm addProjectCloseForm={addProjectCloseForm} />  </div> : <button className="addButton" onClick={toggleProjectForm}> Add a Project</button>}
      </div>
    );
  }
}

export default withRouter(ProjectWrapper);
