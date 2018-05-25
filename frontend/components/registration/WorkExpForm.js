import React from 'react';

class WorkExpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.company || '',
      title: props.title || '',
      description: props.description || '',
      start_date: props.start_date || '',
      end_date: props.end_date || '',
      current: props.current || '',
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
      () => this.props.addEditedWork(
        this.state.company,
        this.state.title,
        this.state.description,
        this.state.start_date,
        this.state.end_date,
        this.state.current,
        this.state.editable,
        this.state.id,
        this.props.positionArray
      )
    );
  };

  render() {
    console.log('work form this.props', this.props);
    console.log('work form this.state', this.state);
    const {
      addWorkCloseForm, addEditedWork, editedVersion, positionArray,
    } = this.props;


    return (
      <div className="workExpFormDiv">
        <div style={{ padding: '25px' }}>
          <div>
            <input id="co-title" type="text" name="company" placeholder="Company" value={this.state.company} onChange={this.handleInputChange} />
            <input id="co-title" type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange} />
          </div>
          <div>
            <input id="profile-date" type="text" name="start_date" placeholder="Start Date MM/YY" value={this.state.start_date} onChange={this.handleInputChange} />
            <input id="profile-date" type="text" name="end_date" placeholder="End Date MM/YY" value={this.state.end_date} onChange={this.handleInputChange} />
          </div>
          <div><input type="text" name="current" placeholder="Current (Yes/No)" value={this.state.current} onChange={this.handleInputChange} /></div>
          <div><input id="pro-desc" type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleInputChange} /></div>
        </div>
        {editedVersion ?
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: '25px' }}>
            <button
              className="addSkillbutt"
              style={{ height: '60px' }}
              onClick={() => this.disableEditAndAdd()}
            >Save
            </button>
          </div> :
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: '25px' }}>
            <button
              className="addSkillbutt"
              style={{ height: '60px' }}
              onClick={() => addWorkCloseForm(
                this.state.company,
                this.state.title,
                this.state.description,
                this.state.start_date,
                this.state.end_date,
                this.state.current,
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


export default WorkExpForm;
