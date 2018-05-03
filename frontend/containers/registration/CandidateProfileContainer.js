import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import ProgressBarProfile from '../../components/registration/ProgressBarProfile';
import ExperienceWrapper from '../../components/registration/ExperienceWrapper';
import ProjectWrapper from '../../components/registration/ProjectWrapper'
import SkillWrapper from '../../components/registration/SkillWrapper'
import Container2 from '../../components/Container2'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

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
      <div className="maindiv2" style={{backgroundColor: "#FAFAFA"}}>
        <Header />
        <Container2>
          <img src="/progressBar2.svg" style={{width: "566px", height: "75px", marginTop: "60px", marginBottom: "60px"}}/>
          <div className="thanksFor">
            <div className="thanksline1">So far so good. Let’s move on and talk about your experience.</div>
            <div className="thanksline2">We use this information to help match you with jobs matching your ares of expertise.</div>
          </div>
          <div className="educationDiv1" >
            <img className="educationImg" src="/Briefcase.svg" alt=""/>
            <div className="canDiv1">
              <div className="canDivHeader">Work Experience</div>
              <ExperienceWrapper addEditedWork={this.addEditedWork} addWorkCloseForm={this.addWorkCloseForm} workExpArr={this.state.workExpArr} addWork={this.addWork} removeWork={this.removeWork} onChange={this.onWorkChange} workFormShown={this.state.workFormShown} toggleWorkForm={this.toggleWorkForm} makeWorkEditable={this.makeWorkEditable} /><br/>
            </div>
          </div>
          <div className="educationDiv1" >
            <img className="educationImg" src="/Binder.svg" alt=""/>
            <div className="canDiv1">
              <div className="canDivHeader">Project Experience</div>
              <ProjectWrapper addEditedProject = {this.addEditedProject} addProjectCloseForm = {this.addProjectCloseForm} projectArr={this.state.projectArr} addProject={this.addProject} removeProject={this.removeProject} onChange={this.onProjectChange} projectFormShown={this.state.projectFormShown} toggleProjectForm={this.toggleProjectForm} makeProjectEditable={this.makeProjectEditable}/><br/>
            </div>
          </div>
          <div className="educationDiv1" >
            <img className="educationImg" src="/CodeDocument.svg" alt=""/>
            <div className="canDiv1">
              <div className="canDivHeader">Skills</div>
              <SkillWrapper skillArr={this.state.skillArr} addSkill={this.addSkill} removeSkill={this.removeSkill} count={this.skillCount}/><br/>
            </div>
          </div>
          <div style={{width: "100%", marginTop: "60px", marginBottom: "60px"}}>
            <a style={{float: "right"}} className="nextButton" onClick={this.saveProfileInfo} href='/app/register/cand/additional'> Next </a>
            <a style={{float: "left"}} className="prevButton" href='/app/register/cand/education'> Previous </a>
          </div>
        </Container2>
        <Footer />
      </div>
    );
  }
}

export default withRouter(CandidateProfileContainer);
