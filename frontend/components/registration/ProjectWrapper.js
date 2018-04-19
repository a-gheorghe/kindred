import React from 'react';
import { withRouter } from 'react-router-dom'
import ProjectForm from './ProjectForm'
import AddProjectButton from './AddProjectButton'

class ProjectWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps(nextProps){
  //   console.log('Component will receive props: NEXTPROPS: ', nextProps, 'THIS.PROPS:', this.props)
  //   // if project form state has changed
  //   // if (nextProps.projectForm !== this.props.projectForm)
  //   //   shouldComponentUpdate()
  // }
  //
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('should component update nextProps.projectForm', nextProps.projectForm)
  //   console.log('should component update this.props', this.props)
  //   // if (nextProps.projectForm !== this.props.projectForm){
  //   //   return true
  //   // } else {
  //   //   return false
  //   // }
  //   return true
  // }



  render(){
    const { projectArr, addProject, removeProject, onChange, projectForm, toggleProjectForm } = this.props
    // const ProjectWrapper = ({ projectArr, addProject, removeProject, onChange, projectForm, toggleProjectForm}) => (
    return (
      <div style={{ border: '1px solid purple' }}>
        <h3>Projects</h3>
        {projectArr.length === 0 ? <p> Projects are a great way to show off your skills. Add your first project </p> : ''}

        {projectArr.map((project, i) => (
          <div style={{border: '1px solid green'}} key={project.id}>
            Title: {project.title} <br/>
            Description: {project.description} <br/>
            Start date: {project.projectstart}<br/>
            <button onClick={(e) => removeProject(project.id, e)}> Delete </button>
          </div>
        ))}
        {projectForm ? <div> <ProjectForm addProject={addProject} toggleProjectForm={toggleProjectForm}/>  </div> : <button onClick={toggleProjectForm}> Add a Project</button>}
        {/* {projectArr.map((data, i) => (
          <div style={{border: '1px solid green'}} key={data.id}>
            <ProjectForm data={data} onChange={onChange} index={i}  />
            <button onClick={(e) => removeProject(data.id, e)}> Delete </button>
          </div>
        ))} */}
        {/* <AddProjectButton addProject={addProject}/> */}
      </div>
    )
  }
};

export default withRouter(ProjectWrapper);
