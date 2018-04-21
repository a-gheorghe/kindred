import React from 'react';

class ProjectForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: props.title || '',
      description: props.description || '',
      projectstart: props.projectstart || '',
      editable: props.editable || false,
      id: props.id
    }
  }

  handleInputChange = (e) => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  toggleEdit = () => {
    this.setState({editable: !this.state.editable})
  }

  disableEditAndAdd = () => {
    console.log('inside disable function before disabling', this.state.editable )
    this.setState({editable: !this.state.editable},
      () => this.props.addEditedProject(this.state.title, this.state.description, this.state.projectstart, this.state.editable, this.state.id, this.props.positionArray))
    }

  render(){
    const { addProjectCloseForm, addEditedProject, editedVersion, positionArray } = this.props
    console.log('the editable state on this project form is: ', 'state: ', this.state.editable, 'props: ', this.props.editable)
    return (
      <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        Title: <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
        Description: <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
        Start: <input type="text" name="projectstart" value={this.state.projectstart} onChange={this.handleInputChange} />
      </div>
      {editedVersion ?
        // if editVersion, want to addProject in same position but with editable as false
        <button onClick={() => this.disableEditAndAdd()}> Save!!!! </button> :
      <button onClick={() => addProjectCloseForm(this.state.title, this.state.description, this.state.projectstart, this.state.editable)}> Save!!!! </button>}
    </div>
    )
  }
}


export default ProjectForm
