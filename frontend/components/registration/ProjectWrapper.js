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
      <div className="experBigDiv">
        <div className="work-exp-header">PROJECTS</div>
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
                <div className="experDiv" key={project.id}>
                  <div>
                    <div id="profile-company-name">{project.title}</div>
                    <div id="profile-desc">{project.description}</div>
                    {/* project role ???? ie. front end eng */}
                    Start date: {project.start_date}<br />
                    End date: {project.end_date}<br />
                    Current: {project.current}<br />
                    Link: {project.link}<br />
                  </div>
                  <div className="toggleExp">
                    <input alt="close" type="image" src="/RedX.svg" onClick={e => removeProject(project.id, e)} />
                    <input alt="edit" type="image" src="/RedEdit.svg" onClick={e => makeProjectEditable(project.id, e)} />
                  </div>
                </div>
          ))}
        </div>
        {projectFormShown ?
          <div> <ProjectForm addProjectCloseForm={addProjectCloseForm} />  </div> :
          <div id="red-button"><button className="addButton" onClick={toggleProjectForm}> Add a Project</button></div>
        }
      </div>
    );
  }
}

export default withRouter(ProjectWrapper);
