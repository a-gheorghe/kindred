import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import ProgressBarProfile from '../../components/registration/ProgressBarProfile';
import ExperienceWrapper from '../../components/registration/ExperienceWrapper';
import ProjectWrapper from '../../components/registration/ProjectWrapper'

class CandidateRegisterProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.workCount = 0;
    this.projectCount = 0;
    this.state = {
      workExpArr: [],
      projectArr: []
    }
  }

  addWork = () => {
    this.setState({workExpArr: [...this.state.workExpArr, {company: "", title: "", description: "", id: this.workCount++}]})
  }

  addProject = () => {
    this.setState({projectArr: [...this.state.projectArr, {name:"", description:"", id: this.projectCount++}]})
  }

  removeWork = (id) => {
    let newWorkExpArr = this.state.workExpArr.slice()
    newWorkExpArr = newWorkExpArr.filter((obj) => obj.id !== id)
    this.setState({workExpArr: newWorkExpArr})
  }

  removeProject = (id) => {
    let newProjectArr = this.state.projectArr.slice()
    newProjectArr = newProjectArr.filter((obj) => obj.id !== id)
    this.setState({projectArr: newProjectArr})
  }

  onWorkChange = (index, newStuff) => {
    const newWorkExpArr = this.state.workExpArr.slice()
    newWorkExpArr[index] = {
      ...newWorkExpArr[index],
      ...newStuff
    }
    this.setState({ workExpArr: newWorkExpArr })
  }

  onProjectChange = (index, newStuff) => {
    console.log('project change this.state', this.state)
    const newProjectArr = this.state.projectArr.slice()
    newProjectArr[index] = {
      ...newProjectArr[index],
      ...newStuff
    }
    this.setState({ projectArr: newProjectArr })
  }

  render() {
    return (
      <div>
        <ProgressBarProfile /><br/>
        <ExperienceWrapper workExpArr={this.state.workExpArr} addWork={this.addWork} removeWork={this.removeWork} onChange={this.onWorkChange} /><br/>
        <ProjectWrapper projectArr={this.state.projectArr} addProject={this.addProject} removeProject={this.removeProject} onChange={this.onProjectChange}/><br/>
        <button style={{float: 'right'}}> <Link to='/register/candidate/additional'> Next </Link></button>
        <button style={{float: 'left'}}> <Link to='/register/candidate/education'> Previous </Link></button>


        {/* <SkillsWrapper /> <br/> */}

      </div>
    );
  }
}

export default withRouter(CandidateRegisterProfileContainer);
