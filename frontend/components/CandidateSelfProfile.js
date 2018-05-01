import React from 'react';
import PropTypes from 'prop-types';
import ExperienceWrapper from './registration/ExperienceWrapper'
import ProjectWrapper from './registration/ProjectWrapper'
import SkillWrapper from './registration/SkillWrapper'
import ProfileSideBar from './ProfileSideBar'
import axios from 'axios'
// import CandidateRegisterEducation from './registration/CandidateRegisterEducation'
// import CandidateProfileContainer from '../containers/registration/CandidateProfileContainer'

import OptionsCand from './authentication/OptionsCand';

class CandidateSelfProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      picture: 'https://kindred-testing-ana.s3.us-west-1.amazonaws.com/c58dcc1d-52d2-426d-a598-4c8091d61dd0.jpg',
      resume: '',
      location: 'San Francisco',
      eduArr: [],
      workExpArr: [],
      projectArr: [],
      skillArr: [],
      workFormShown: false,
      projectFormShown: false,
    }
  }
  //
  // componentDidMount(){
  //   console.log('front end here')
  //   axios.get('/candidate/profile')
  //   .then(result => {
  //     console.log('front end result', result)
  //     this.workCount = result.workArr.length-1
  //     this.projectCount = result.projectArr-1
  //     this.skillCount = result.skillArr-1
  //     this.setState({
  //       picture: result.basic.picture_url,
  //       resume: result.basic.resume_url,
  //       location: result.basic.location,
  //       eduArr: result.eduArr,
  //       workExpArr: result.workArr,
  //       projectArr: result.projectArr,
  //       skillArr: result.skillArr
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }
  //
  //

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


  render(){
    return (
      <div>
        <OptionsCand loggedInCand={this.props.loggedInCand} logoutCand={this.props.logoutCand} />
        <div style={{border: '2px dotted red'}}>
          <ProfileSideBar picture={this.state.picture} location={this.state.location} />
          Education: {this.state.eduArr.map(edu => <div> {edu.school_name} </div>)}
          <ExperienceWrapper addEditedWork={this.addEditedWork} addWorkCloseForm={this.addWorkCloseForm} workExpArr={this.state.workExpArr} addWork={this.addWork} removeWork={this.removeWork} workFormShown={this.state.workFormShown} toggleWorkForm={this.toggleWorkForm} makeWorkEditable={this.makeWorkEditable} /><br/>
          <ProjectWrapper addEditedProject = {this.addEditedProject} addProjectCloseForm = {this.addProjectCloseForm} projectArr={this.state.projectArr} addProject={this.addProject} removeProject={this.removeProject} projectFormShown={this.state.projectFormShown} toggleProjectForm={this.toggleProjectForm} makeProjectEditable={this.makeProjectEditable}/><br/>
          <SkillWrapper skillArr={this.state.skillArr} addSkill={this.addSkill} removeSkill={this.removeSkill} count={this.skillCount}/><br/>
        </div>
      </div>
    )
  }
}


CandidateSelfProfile.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default CandidateSelfProfile;
