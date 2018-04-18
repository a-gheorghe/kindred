import React from 'react';
import { withRouter } from 'react-router-dom'
// import SkillForm from './SkillForm'
// import AddSkillButton from './AddSkillButton'

class SkillWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      skill: '',
    }
  }

handleInputChange = (e) => {
  console.log('this.state', this.state)
  this.setState({skill: e.target.value})
}

addSkillResetState = () => {
  this.props.addSkill(this.state.skill);
  this.setState({skill: ''})
}


render() {
  console.log('this.props', this.props)
  return (
// const SkillWrapper = ({ skillArr, addSkill, removeSkill, onChange, index}) => (
  <div style={{ border: '1px solid black' }}>
    <h3>Skills</h3>

    {this.props.skillArr.length === 0 ? <p> What skills do you have? </p> : ''}
    {this.props.skillArr.map((data, i) => (
      <div style={{border: '1px solid green'}} key={data.id}>
        {data.skill}
        <button onClick={(e) => this.props.removeSkill(data.id, e)}> Delete </button>
      </div>
    ))}
    <input type="text" name="skill" onChange={(e) => this.handleInputChange(e)} value={this.state.skill}/>
    <button onClick={this.addSkillResetState}> Add Skill </button>
  </div>
)
}}



export default withRouter(SkillWrapper);
