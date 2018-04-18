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
      skillArr: []
    }
  }

  addWork = () => {
    this.setState({workExpArr: [...this.state.workExpArr, {company: "", title: "", description: "", id: this.workCount++}]})
  }

  addProject = () => {
    this.setState({projectArr: [...this.state.projectArr, {name:"", description:"", id: this.projectCount++}]})
  }

  addSkill = () => {
    this.setState({skillArr: [...this.state.skillArr, {skill: "", id: this.skillCount++}]})
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

  onSkillChange = (index, newStuff) => {
    console.log('skill change this.state', this.state)
    const newSkillArr = this.state.skillArr.slice()
    newSkillArr[index] = {
      ...newSkillArr[index],
      ...newStuff
    }
    this.setState({ skillArr: newSkillArr })
  }

  render() {
    return (
      <div>
        <ProgressBarProfile /><br/>
        <ExperienceWrapper workExpArr={this.state.workExpArr} addWork={this.addWork} removeWork={this.removeWork} onChange={this.onWorkChange} /><br/>
        <ProjectWrapper projectArr={this.state.projectArr} addProject={this.addProject} removeProject={this.removeProject} onChange={this.onProjectChange}/><br/>
        <SkillWrapper skillArr={this.state.skillArr} addSkill={this.addSkill} removeSkill={this.removeSkill} onChange={this.onSkillChange}/><br/>
        <button style={{float: 'right'}}> <Link to='/register/candidate/additional'> Next </Link></button>
        <button style={{float: 'left'}}> <Link to='/register/candidate/education'> Previous </Link></button>


        {/* <SkillsWrapper /> <br/> */}

      </div>
    );
  }
}

export default withRouter(CandidateRegisterProfileContainer);
