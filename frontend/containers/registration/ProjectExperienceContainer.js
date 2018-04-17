import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import AddProjectButton from '../../components/registration/AddProjectButton'
import ProjectViewsWrapperContainer from './ProjectViewsWrapperContainer'
import IndivProjectContainer from './IndivProjectContainer'



class ProjectExperienceContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projectArray: []
      }

    let count = 0
    this.addProject = () => {
      console.log('adding project')
      count++
      let projectArray = this.state.projectArray.concat({component: IndivProjectContainer, uid: count})
      this.setState({ projectArray })
    }

    this.removeProject = (id) => {
      let projectArray = this.state.projectArray.slice()
      projectArray.splice(id, 1)
      this.setState({ projectArray })
    }
  }

  render() {
    const projectArray = this.state.projectArray.map((element, index) => {
      return (<element.component key={element.uid} uid={element.uid} index={index} removeProject={this.removeProject}/>)
    })

    return (
      <div style={{ border: '1px solid red' }}>
        {/* { workArray } */}
        <ProjectViewsWrapperContainer> { projectArray } </ProjectViewsWrapperContainer>
        <AddProjectButton addProject={this.addProject}/>
      </div>
    );
  }
}

export default withRouter(ProjectExperienceContainer);
