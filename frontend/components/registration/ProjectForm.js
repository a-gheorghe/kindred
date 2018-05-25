import React from 'react';
import Picker from 'react-month-picker';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      description: props.description || '',
      start_date: props.start_date || '',
      end_date: props.end_date || '',
      current: props.current || '',
      link: props.link || '',
      editable: props.editable || false,
      id: props.id,
    };
  }

  handleInputChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  toggleEdit = () => {
    this.setState({ editable: !this.state.editable });
  };

  disableEditAndAdd = () => {
    this.setState(
      { editable: !this.state.editable },
      () => this.props.addEditedProject(
        this.state.title,
        this.state.description,
        this.state.start_date,
        this.state.end_date,
        this.state.current,
        this.state.link,
        this.state.editable,
        this.state.id,
        this.props.positionArray
      ),
    );
  };

  deletePhoto = (photoIndex) => {
    this.state.files.splice(photoIndex, 1);
    this.setState({
      files: this.state.files,
    });
  };

  render() {
    const {
      addProjectCloseForm, addEditedProject, editedVersion, positionArray,
    } = this.props;
    return (
      <div className="workExpFormDiv">
        <div style={{ padding: '25px' }}>
          <div>
            <input id="co-title" type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange} />
            <input id="co-title" type="text" name="link" placeholder="Link" value={this.state.link} onChange={this.handleInputChange} />
          </div>
          <div>
            <input id="profile-date" type="text" name="start_date" placeholder="Start Date" value={this.state.start_date} onChange={this.handleInputChange} />
            <input id="profile-date" type="text" name="end_date" placeholder="End Date" value={this.state.end_date} onChange={this.handleInputChange} />
          </div>
          <div><input type="text" name="current" placeholder="Current (Yes/No)" value={this.state.current} onChange={this.handleInputChange} /></div>
          <div><input id="pro-desc" type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleInputChange} /></div>
        </div>
        {editedVersion ?
        // if editVersion, want to addProject in same position but with editable as false
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: '25px' }}>
            <button
              className="addSkillbutt"
              style={{ height: '60px' }}
              onClick={() => this.disableEditAndAdd()}
            > Save
            </button>
          </div> :
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: '25px' }}>
            <button
              className="addSkillbutt"
              style={{ height: '60px' }}
              onClick={() => addProjectCloseForm(
                this.state.title,
                this.state.description,
                this.state.start_date,
                this.state.end_date,
                this.state.current,
                this.state.link,
                this.state.editable
              )}
            >
              Save
            </button>
          </div>
        }
      </div>
    );
  }
}


export default ProjectForm;
