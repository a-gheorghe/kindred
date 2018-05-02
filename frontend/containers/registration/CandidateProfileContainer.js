import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import ProgressBarProfile from '../../components/registration/ProgressBarProfile';
import ExperienceWrapper from '../../components/registration/ExperienceWrapper';
import ProjectWrapper from '../../components/registration/ProjectWrapper'
import SkillWrapper from '../../components/registration/SkillWrapper'

import axios from 'axios';

class CandidateProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.workCount = 0;
    this.projectCount = 0;
    this.skillCount = 0;
    this.state = {
      workExpArr: [],
      projectArr: [],
      skillArr: [],
      workFormShown: false,
      projectFormShown: false,
    }
  }

  // componentDidMount(){
  //   axios.get('/candidate/profile')
  //   .then(result => {
  //     this.setState({
  //       workExpArr: result.workArr,
  //       projectArr: result.projectArr,
  //       skillArr: result.skillArr
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

  saveProfileInfo = () => {
    const currentState = {
      workArr: this.state.workExpArr,
      projectArr: this.state.projectArr,
      skillArr: this.state.skillArr
    }

    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))
    let newCandidateObject = Object.assign({}, currentState, candidateObject)
    localStorage.setItem('candidateObject', JSON.stringify(newCandidateObject))
  }



  addWork = (company, title, description, start_date, end_date, current, editable) => {
    this.setState({workExpArr: [...this.state.workExpArr, {company: company, title: title, description: description, start_date: start_date, end_date: end_date, current: current, editable: editable, id: this.workCount++}]})
  }

  addProject = (title, description, start_date, end_date, current, link, editable) => {
    this.setState({projectArr: [...this.state.projectArr, {title: title, description: description, start_date: start_date, end_date: end_date, current: current, link: link, editable: editable, id: this.projectCount++}]},
      () => console.log('this.state after adding', this.state))
  }

  addEditedProject = (title, description, start_date, end_date, current, link, editable, id, positionArray) => {
    const newProjectArr = this.state.projectArr.slice()
    console.log('array before', newProjectArr)
    newProjectArr.splice(positionArray, 1, {title: title, description: description, start_date: start_date, end_date: end_date, current: current, link: link, editable: editable, id: id})
    console.log('array after: ', newProjectArr)
    this.setState({projectArr: newProjectArr})
  }

  addEditedWork = (company, title, description, start_date, end_date, current, editable, id, positionArray) => {
    const newWorkArr = this.state.workExpArr.slice()
    newWorkArr.splice(positionArray, 1, {company: company, title: title, description: description, start_date: start_date, end_date: end_date, current: current, editable: editable, id: id})
    this.setState({workExpArr: newWorkArr})
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

  toggleProjectForm = () => {
    this.setState({ projectFormShown: !this.state.projectFormShown})
  }

  toggleWorkForm = () => {
    this.setState({ workFormShown: !this.state.workFormShown})
  }

  makeProjectEditable = (index) => {
    const editSavvyProjectArr = this.state.projectArr.slice()
    const foundIndex = editSavvyProjectArr.findIndex(project => project.id == index);
    editSavvyProjectArr[foundIndex].editable = true
    this.setState({ projectArr: editSavvyProjectArr})
  }

  makeWorkEditable = (index) => {
    const editSavvyWorkArr = this.state.workExpArr.slice()
    const foundIndex = editSavvyWorkArr.findIndex(work => work.id == index)
    editSavvyWorkArr[foundIndex].editable = true
    this.setState({ workExpArr: editSavvyWorkArr})
  }

  addProjectCloseForm = (title, description, start_date, end_date, current, link, editable) => {
    this.addProject(title, description, start_date, end_date, current, link, editable)
    this.toggleProjectForm()
  }

  addWorkCloseForm = (company, title, description, start_date, end_date, current, editable) => {
    this.addWork(company, title, description, start_date, end_date, current, editable)
    this.toggleWorkForm()
  }


  render() {
    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))

    console.log('candidate object on register profile container page is: ', candidateObject)
    console.log('PROFILE CONTAINER', this.props)

    return (
      <div style={{border: '2px dotted red'}}>
        <ProgressBarProfile /> <br/>
        <ExperienceWrapper addEditedWork={this.addEditedWork} addWorkCloseForm={this.addWorkCloseForm} workExpArr={this.state.workExpArr} addWork={this.addWork} removeWork={this.removeWork} workFormShown={this.state.workFormShown} toggleWorkForm={this.toggleWorkForm} makeWorkEditable={this.makeWorkEditable} /><br/>
        <ProjectWrapper addEditedProject = {this.addEditedProject} addProjectCloseForm = {this.addProjectCloseForm} projectArr={this.state.projectArr} addProject={this.addProject} removeProject={this.removeProject} projectFormShown={this.state.projectFormShown} toggleProjectForm={this.toggleProjectForm} makeProjectEditable={this.makeProjectEditable}/><br/>
        <SkillWrapper skillArr={this.state.skillArr} addSkill={this.addSkill} removeSkill={this.removeSkill} count={this.skillCount}/><br/>
        <button style={{float: 'right'}}> <Link onClick={this.saveProfileInfo} to='/register/cand/additional'> Next </Link></button>
        <button style={{float: 'left'}}> <Link to='/register/cand/education'> Previous </Link></button>
      </div>
    );
  }
}

export default withRouter(CandidateProfileContainer);
