import React from 'react';
import Picker from 'react-month-picker'
import Dropzone from 'react-dropzone'
import axios from 'axios'

class ProjectForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: props.title || '',
      description: props.description || '',
      projectstart: props.projectstart || '',
      projectend: props.projectend || '',
      current: props.current || '',
      link: props.link || '',
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
    this.setState({editable: !this.state.editable},
      () => this.props.addEditedProject(this.state.title, this.state.description, this.state.projectstart, this.state.projectend, this.state.current, this.state.link, this.state.editable, this.state.id, this.props.positionArray))
    }

  deletePhoto = (photoIndex) => {
    this.state.files.splice(photoIndex, 1)
    this.setState({
      files: this.state.files
    })
  }

  render(){
    const { addProjectCloseForm, addEditedProject, editedVersion, positionArray} = this.props
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          Title: <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
          Description: <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
          Start: <input type="text" name="projectstart" value={this.state.projectstart} onChange={this.handleInputChange} />
          End: <input type="text" name="projectend" value={this.state.projectend} onChange={this.handleInputChange} />
          Current: <input type="text" name="current" value={this.state.current} onChange={this.handleInputChange} />
          Link: <input type="text" name="link" value={this.state.link} onChange={this.handleInputChange} />
        </div>
      {editedVersion ?
        // if editVersion, want to addProject in same position but with editable as false
        <button onClick={() => this.disableEditAndAdd()}> Save!!!! </button> :
      <button onClick={() => addProjectCloseForm(this.state.title, this.state.description, this.state.projectstart, this.state.projectend, this.state.current, this.state.link, this.state.editable)}> Save!!!! </button>}
    </div>
    )
  }
}


export default ProjectForm
