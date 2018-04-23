import React from 'react';
import Picker from 'react-month-picker'
import Dropzone from 'react-dropzone'

class ProjectForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: props.title || '',
      description: props.description || '',
      projectstart: props.projectstart || '',
      editable: props.editable || false,
      id: props.id,
      files: props.photos || []
    }
  }

  onDrop = (file) => {
  let newFiles = this.state.files.concat(file)
   this.setState({
     files: newFiles
   });
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
      () => this.props.addEditedProject(this.state.title, this.state.description, this.state.projectstart, this.state.files, this.state.editable, this.state.id, this.props.positionArray))
    }

  deletePhoto = (photoIndex) => {
    this.state.files.splice(photoIndex, 1)
    this.forceUpdate()
  }

  render(){
    const { addProjectCloseForm, addEditedProject, editedVersion, positionArray} = this.props
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          Title: <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
          Description: <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
          Start: <input type="text" name="projectstart" value={this.state.projectstart} onChange={this.handleInputChange} />
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop}>
              <p>Upload some pictures</p>
            </Dropzone>
            <div>{this.state.files.map((file, photoIndex) =>
              <div>
                <button onClick={() => this.deletePhoto(photoIndex)}> x </button>
                <img src={file.preview} style={{"height": "60px", "width": "50px", "margin": "5px", "border": "1px solid black"}} />
              </div>
            )}
          </div>
          </div>
        </div>
      {editedVersion ?
        // if editVersion, want to addProject in same position but with editable as false
        <button onClick={() => this.disableEditAndAdd()}> Save!!!! </button> :
      <button onClick={() => addProjectCloseForm(this.state.title, this.state.description, this.state.projectstart, this.state.files, this.state.editable)}> Save!!!! </button>}
    </div>
    )
  }
}


export default ProjectForm
