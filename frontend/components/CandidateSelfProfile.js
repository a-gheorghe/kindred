import React from 'react';
import PropTypes from 'prop-types';
import ExperienceWrapper from './registration/ExperienceWrapper'
import ProjectWrapper from './registration/ProjectWrapper'
import SkillWrapper from './registration/SkillWrapper'
import ProfileSideBar from './ProfileSideBar'

import Footer from './Footer'
import axios from 'axios'
// import CandidateRegisterEducation from './registration/CandidateRegisterEducation'
// import CandidateProfileContainer from '../containers/registration/CandidateProfileContainer'

import OptionsCand from './authentication/OptionsCand';

class CandidateSelfProfile extends React.Component {
  constructor(props){
    super(props);
    this.workCount = 0;
    this.projectCount = 0;
    this.skillCount = 0;
    this.state = {
      basic: {
        first_name: 'Ana',
        last_name: 'Gheorghe',
        github_url:'https://github.com/a-gheorghe',
        linkedin_url: 'https://www.linkedin.com/in/ana-stefania-gheorghe-6b1253158/',
        resume: '',
        pictureUrl: 'https://kindred-testing-ana.s3.us-west-1.amazonaws.com/c58dcc1d-52d2-426d-a598-4c8091d61dd0.jpg',
        location: 'San Francisco',
      },
      eduArr: [{school: 'UBC', major: 'Neuroscience'}],
      workExpArr: [
        {company: 'Facebook', title: 'software engineer', description: 'did stuff' },
        {company: 'Facebook', title: 'software engineer', description: 'other stuff' },
        {company: 'Facebook', title: 'software engineer', description: 'more stuff' },
      ],
      projectArr: [
        {title: "Runn+", description: "Created a phone app to find exercise partners using React Native"},
        {title: "Kindred Talent", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin sed nisl libero. Fusce quis nulla urna. In fermentum nec ligula quis viverra. In posuere sed nisl ultrices posuere."}
        ],
      skillArr: [{skill: "javascript"}, {skill: "python"}, {skill: "react"}],
      workFormShown: false,
      projectFormShown: false,
      changed: false
    }
  }

    onDropPicture = (file) => {
      let formData = new FormData();
      formData.append('documents', file[0])
      axios.post('/upload', formData)
      .then((result) => {
        this.setState({
          basic: {...this.state.basic,
            pictureUrl: result.data.docs.profilePic
          },
          changed: true
        });

      })
      .catch(err => console.log('upload error', err))
    }
  //
  componentDidMount(){
    console.log('front end here')
    axios.get('/candidate/profile')
    .then(result => {
      console.log('front end result', result)
      this.workCount = result.workArr.length-1
      this.projectCount = result.projectArr-1
      this.skillCount = result.skillArr-1
      this.setState({
        basic: {
          pictureUrl: result.basic.picture_url,
          picture: result.basic.picture_url,
          resume: result.basic.resume_url,
          location: result.basic.location,
        },
        eduArr: result.eduArr,
        workExpArr: result.workArr,
        projectArr: result.projectArr,
        skillArr: result.skillArr
      })
    })
    .catch(err => console.log(err))
  }
  //
  //

  addWork = (company, title, description, start_date, end_date, current, editable) => {
    this.setState({
      workExpArr: [...this.state.workExpArr, {company: company, title: title, description: description, start_date: start_date, end_date: end_date, current: current, editable: editable, id: this.workCount++}],
      changed: true
    })
  }

  addProject = (title, description, start_date, end_date, current, link, editable) => {
    this.setState({
      projectArr: [...this.state.projectArr, {title: title, description: description, start_date: start_date, end_date: end_date, current: current, link: link, editable: editable, id: this.projectCount++}],
      changed: true
    })
  }

  addEditedProject = (title, description, start_date, end_date, current, link, editable, id, positionArray) => {
    const newProjectArr = this.state.projectArr.slice()
    newProjectArr.splice(positionArray, 1, {title: title, description: description, start_date: start_date, end_date: end_date, current: current, link: link, editable: editable, id: id})
    this.setState({projectArr: newProjectArr, changed: true})
  }

  addEditedWork = (company, title, description, start_date, end_date, current, editable, id, positionArray) => {
    const newWorkArr = this.state.workExpArr.slice()
    newWorkArr.splice(positionArray, 1, {company: company, title: title, description: description, start_date: start_date, end_date: end_date, current: current, editable: editable, id: id})
    this.setState({workExpArr: newWorkArr, changed: true})
  }

  addSkill = (skill) => {
    this.setState({skillArr: [...this.state.skillArr, {skill: skill, id: this.skillCount++}], changed: true})
  }

  removeWork = (id) => {
    let newWorkExpArr = this.state.workExpArr.slice()
    newWorkExpArr = newWorkExpArr.filter((obj) => obj.id !== id)
    this.setState({workExpArr: newWorkExpArr, changed: true})
  }

  removeProject = (id) => {
    let newProjectArr = this.state.projectArr.slice()
    newProjectArr = newProjectArr.filter((obj) => obj.id !== id)
    this.setState({projectArr: newProjectArr, changed: true})
  }

  removeSkill = (id) => {
    let newSkillArr = this.state.skillArr.slice()
    newSkillArr = newSkillArr.filter((obj) => obj.id !== id)
    this.setState({skillArr: newSkillArr, changed: true})
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
    console.log('profile this.props', this.props)
    console.log('profile this.state', this.state)
    return (
      <div>
        <OptionsCand loggedInCand={this.props.loggedInCand} logoutCand={this.props.logoutCand} />
        <div className='profile-holder'>
          <div className='profile-sidebar'>
            <div className='profile-picture'>
              <ProfileSideBar onDropPicture={this.onDropPicture} basic={this.state.basic} eduArr={this.state.eduArr} />
            </div>
          </div>
          <div className='profile-content'>
            <div id="work"><ExperienceWrapper addEditedWork={this.addEditedWork} addWorkCloseForm={this.addWorkCloseForm} workExpArr={this.state.workExpArr} addWork={this.addWork} removeWork={this.removeWork} workFormShown={this.state.workFormShown} toggleWorkForm={this.toggleWorkForm} makeWorkEditable={this.makeWorkEditable} /></div>
            <div id="projects"><ProjectWrapper addEditedProject = {this.addEditedProject} addProjectCloseForm = {this.addProjectCloseForm} projectArr={this.state.projectArr} addProject={this.addProject} removeProject={this.removeProject} projectFormShown={this.state.projectFormShown} toggleProjectForm={this.toggleProjectForm} makeProjectEditable={this.makeProjectEditable}/></div>
            <div id="skills"><SkillWrapper skillArr={this.state.skillArr} addSkill={this.addSkill} removeSkill={this.removeSkill} count={this.skillCount}/></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


CandidateSelfProfile.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default CandidateSelfProfile;
