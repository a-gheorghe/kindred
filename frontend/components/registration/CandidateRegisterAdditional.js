import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ProgressBarAdditional from './ProgressBarAdditional'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import '../styles/styles.css'

class CandidateRegisterAdditional extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      github: '',
      linkedin: '',
      website: '',
      selfbio: '',
      files: [],
      resume: ''
    }
  }

  uploadPhoto = () => {
    const { files } = this.state;
    let formData = new FormData();

    formData.append('profile-photo', files)


    axios.post('/profilephoto', formData)
    .then((result) => {
      console.log('this is my result', result)
    })
    .catch(err => {
      console.log('oops, sorry an error occured', err)
    })
  }

  onDropPicture = (file) => {
    console.log('calling profile pic drop')
    this.setState({
      files: file
    }, () => console.log('this.state.files after setting state', this.state.files));
  }

  onDropResume = (resume) => {
    this.setState({
      resume: resume
    })
  }

  handleAdditionalChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  deletePhoto = () => {
    this.setState({
      files: ''
    })
  }

  deleteResume = () => {
    this.setState({
      resume: ''
    })
  }




  render() {
    console.log('ADDITIONAL REGIONAL PAGE STATE', this.state)
    return (
      <div>
        <ProgressBarAdditional />
        <div className="container-additional">
          <div className="left">
            <Dropzone style={{"display": "inline-block", border: "1px dotted grey", "height": "200px", width: "100%"}} onDrop={this.onDropPicture}>
              <div>
                <p>Drop or click to add a profile picture</p>
                {this.state.files.length === 0 ? '' :
                <div>
                  <button onClick={() => this.deletePhoto()} > x </button>
                  <img src={this.state.files[0].preview} style={{"height": "60px", "width": "50px", "margin": "5px", "border": "1px solid black"}} />
                </div>}
              </div>
            </Dropzone>
          </div>
          <div className="right">
            <input type="text" name="github" placeholder="Github URL" onChange={this.handleAdditionalChange} /> <br />
            <input type="text" name="linkedin" placeholder="LinkedIn URL" onChange={this.handleAdditionalChange} /> <br />
            <input type="text" name="website" placeholder="Personal Website URL"  onChange={this.handleAdditionalChange} /> <br />
            <textarea type="text" name="selfbio" onChange={this.handleAdditionalChange} defaultvalue= "Tell us about yourself" placeholder="Tell us about yourself"/> <br />
            <div>
              <label htmlFor="files">Upload Resume</label>
              <input id="files" type="file" placeholder="Upload file"/>
            </div>
              {/* <Dropzone style={{"width": "50px", "height": "50px", "border": "1px solid red"}} onDrop={this.onDropResume}>
                Upload your resume
                {this.state.resume.length === 0 ? '' :
                <div><button onClick={() => this.deleteResume()} > x </button><img src={this.state.resume[0].preview} style={{"height": "60px", "width": "50px", "margin": "5px", "border": "1px solid black"}} /></div>}
              </Dropzone> */}
            </div>
          </div>
          <Link style={{float: 'left'}} to='/register/candidate/profile'> Back </Link>
          <Link onClick={this.uploadPhoto} style={{float: 'right'}} to="/cand/messages"> Done </Link>
        </div>



    );
  }
}

export default withRouter(CandidateRegisterAdditional);
