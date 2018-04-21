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
      projectFormShown: false,
    }
  }

  addWork = () => {
    this.setState({workExpArr: [...this.state.workExpArr, {company: "", title: "", description: "", id: this.workCount++}]})
  }

  addProject = (title, description, projectstart, editable) => {
    this.setState({projectArr: [...this.state.projectArr, {title: title, description: description, projectstart: projectstart, editable: editable, id: this.projectCount++}]},
      () => console.log('this.state after adding', this.state))
  }

  addEditedProject = (title, description, projectstart, editable, id, positionArray) => {
    const newProjectArr = this.state.projectArr.slice()
    console.log('array before', newProjectArr)
    newProjectArr.splice(positionArray, 1, {title: title, description: description, projectstart: projectstart, editable: editable, id: id})
    console.log('array after: ', newProjectArr)
    this.setState({projectArr: newProjectArr})
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
    this.setState({ projectFormShown: !this.state.projectFormShown}, () => console.log('toggled projectForm. this.state.projectFormShown is now: ', JSON.stringify(this.state.projectFormShown)))
  }

  makeProjectEditable = (index) => {
    console.log('calling makeEditable with this index', index)
    const editSavvyProjectArr = this.state.projectArr.slice()
    console.log('old projectArr is', JSON.stringify(this.state.projectArr))
    const foundIndex = editSavvyProjectArr.findIndex(project => project.id == index);
    editSavvyProjectArr[foundIndex].editable = true
    this.setState({ projectArr: editSavvyProjectArr}, () => console.log('new projectArr', JSON.stringify(this.state.projectArr)))
  }

  addProjectCloseForm = (title, description, projectstart, editable) => {
    this.addProject(title, description, projectstart, editable)
    this.toggleProjectForm()
  }


  render() {
    console.log('this.state.projectArr at the beginng of candregisterprofilecontainer', JSON.stringify(this.state.projectArr))
    return (
      <div style={{border: '2px dotted red'}}>
        <ProgressBarProfile /><br/>
        <ExperienceWrapper workExpArr={this.state.workExpArr} addWork={this.addWork} removeWork={this.removeWork} onChange={this.onWorkChange} /><br/>
        <ProjectWrapper addEditedProject = {this.addEditedProject} addProjectCloseForm = {this.addProjectCloseForm} projectArr={this.state.projectArr} addProject={this.addProject} removeProject={this.removeProject} onChange={this.onProjectChange} projectFormShown={this.state.projectFormShown} toggleProjectForm={this.toggleProjectForm} makeProjectEditable={this.makeProjectEditable}/><br/>
        <SkillWrapper skillArr={this.state.skillArr} addSkill={this.addSkill} removeSkill={this.removeSkill} count={this.skillCount}/><br/>
        <button style={{float: 'right'}}> <Link to='/register/candidate/additional'> Next </Link></button>
        <button style={{float: 'left'}}> <Link to='/register/candidate/education'> Previous </Link></button>
      </div>
    );
  }
}

export default withRouter(CandidateRegisterProfileContainer);
