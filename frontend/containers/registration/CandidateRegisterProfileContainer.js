import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import ProgressBarProfile from '../../components/registration/ProgressBarProfile';
import ExperienceWrapper from '../../components/registration/ExperienceWrapper';
import ProjectWrapper from '../../components/registration/ProjectWrapper'
import SkillWrapper from '../../components/registration/SkillWrapper'

class CandidateRegisterProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.workCount = 0;
    this.projectCount = 0;
    this.skillCount = 0;
    this.state = {
      workExpArr: [],
      projectArr: [],
      skillArr: [],
      projectForm: false,
    }
  }

  addWork = () => {
    this.setState({workExpArr: [...this.state.workExpArr, {company: "", title: "", description: "", id: this.workCount++}]})
  }

  addProject = (title, description, projectstart) => {
    this.setState({projectArr: [...this.state.projectArr, {title: title, description: description, projectstart: projectstart, id: this.projectCount++}]}, () => console.log('this.state after adding', this.state))
  }

  addSkill = (skill) => {
    this.setState({skillArr: [...this.state.skillArr, {skill: skill, id: this.skillCount++}]})
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

  removeSkill = (id) => {
    let newSkillArr = this.state.skillArr.slice()
    newSkillArr = newSkillArr.filter((obj) => obj.id !== id)
    this.setState({skillArr: newSkillArr})
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

  toggleProjectForm = () => {
    console.log('toggling project form', this.state.projectForm)
    this.setState({ projectForm: !this.state.projectForm})
  }


  render() {
    return (
      <div style={{border: '2px dotted red'}}>
        <ProgressBarProfile /><br/>
        <ExperienceWrapper workExpArr={this.state.workExpArr} addWork={this.addWork} removeWork={this.removeWork} onChange={this.onWorkChange} /><br/>
        <ProjectWrapper projectArr={this.state.projectArr} addProject={this.addProject} removeProject={this.removeProject} onChange={this.onProjectChange} projectForm={this.state.projectForm} toggleProjectForm={this.toggleProjectForm}/><br/>
        <SkillWrapper skillArr={this.state.skillArr} addSkill={this.addSkill} removeSkill={this.removeSkill} count={this.skillCount}/><br/>
        <button style={{float: 'right'}}> <Link to='/register/candidate/additional'> Next </Link></button>
        <button style={{float: 'left'}}> <Link to='/register/candidate/education'> Previous </Link></button>
      </div>
    );
  }
}

export default withRouter(CandidateRegisterProfileContainer);
