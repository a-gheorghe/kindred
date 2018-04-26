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
      files: '',
      resume: ''
    }
  }

  uploadBoth = () => {
    const { files, resume } = this.state;
    let formData = new FormData();
    formData.append('documents', files[0])
    formData.append('documents', resume[0])

    axios.post('/upload', formData)
    .then((result) => {

      let candidateObject = JSON.parse(localStorage.getItem('candidateObject'))
      candidateObject.basic.github_url = this.state.github
      candidateObject.basic.linkedin_url = this.state.linkedin
      candidateObject.basic.website_url = this.state.website
      candidateObject.basic.resume_url = result.data.docs.resume
      candidateObject.basic.picture_url = result.data.docs.profilePic

      localStorage.setItem('candidateObject', JSON.stringify(candidateObject))
      this.props.history.push('/cand/pending')
    })
    // .then(() => this.props.history.push('/cand/pending'))
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
    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))

    console.log('candidate object inside additional', candidateObject)
    return (
      <div>
        <ProgressBarAdditional />
        <div className="ana container-additional">
          <div className="ana left">
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
          <div className="ana right">
            <input type="text" name="github" placeholder="Github URL" onChange={this.handleAdditionalChange} /> <br />
            <input type="text" name="linkedin" placeholder="LinkedIn URL" onChange={this.handleAdditionalChange} /> <br />
            <input type="text" name="website" placeholder="Personal Website URL"  onChange={this.handleAdditionalChange} /> <br />
            <textarea type="text" name="selfbio" onChange={this.handleAdditionalChange} defaultvalue= "Tell us about yourself" placeholder="Tell us about yourself"/> <br />
              <Dropzone style={{"width": "100%", "height": "50px", "border": "1px solid purple"}} onDrop={this.onDropResume}>
                <span><button>Upload your resume</button>
                {this.state.resume.length === 0 ? '' :
                <div>{this.state.resume[0].name}<button onClick={() => this.deleteResume()} > x </button> </div>}
              </span>
              </Dropzone>
            </div>
          </div>
          <Link style={{float: 'left'}} to='/register/cand/profile'> Back </Link>
          {/* <Link onClick={this.uploadBoth} style={{float: 'right'}} to="/cand/pending"> Done </Link> */}

          <a onClick={this.uploadBoth} style={{float: 'right'}}> Done </a>

        </div>



    );
  }
}

export default withRouter(CandidateRegisterAdditional);
