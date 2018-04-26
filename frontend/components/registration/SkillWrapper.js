import React from 'react';
import { withRouter } from 'react-router-dom'
import Autocomplete from 'react-autocomplete'
import BasicAutocomplete from './BasicAutocomplete'
import skills from './SkillOptions'


class SkillWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      skill: ''
    }
  }

handleInputChange = (e) => {
  this.setState({skill: e})
}


addSkillResetState = () => {
  this.props.addSkill(this.state.skill);
  this.setState({skill: ''})
}


render() {
  return (
  <div style={{ border: '1px solid black' }}>
    <h3>Skills</h3>

    {this.props.skillArr.length === 0 ? <p> What skills do you have? </p> : ''}
    {this.props.skillArr.map((data, i) => (
      <span style={{border: '1px solid green', color: 'red', margin: '10 10 10 10'}} key={data.id}>
        {data.skill}
        <button onClick={(e) => this.props.removeSkill(data.id, e)}> Delete </button>
      </span>
    ))}

    <BasicAutocomplete
          items={skills}
          onChange={(e) => this.handleInputChange(e)}
          addSkill={this.addSkillResetState}
    />
  </div>
  )
}}



export default withRouter(SkillWrapper);
