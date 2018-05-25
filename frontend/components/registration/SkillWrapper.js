import React from 'react';
import { withRouter } from 'react-router-dom';
import Autocomplete from 'react-autocomplete';
import BasicAutocomplete from './BasicAutocomplete';
import skills from './SkillOptions';


class SkillWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: '',
    };
  }

handleInputChange = (e) => {
  this.setState({ skill: e });
};


addSkillResetState = () => {
  this.props.addSkill(this.state.skill);
  this.setState({ skill: '' });
};


render() {
  return (
    <div className="experBigDiv">
      <div className="work-exp-header">SKILLS</div>
      <div className="skillContainer">
        {this.props.skillArr.map((data, i) => (
          <div id="oneSkill" key={data.id}>
            <div id="skillText">{data.skill}</div>
            <div>
              <input alt="deleteSkill" type="image" src="/deleteSkill.svg" onClick={e => this.props.removeSkill(data.id, e)} />
            </div>
          </div>
          ))}
      </div>
      <BasicAutocomplete
        items={skills}
        onChange={e => this.handleInputChange(e)}
        addSkill={this.addSkillResetState}
      />
    </div>
  );
}
}


export default withRouter(SkillWrapper);
