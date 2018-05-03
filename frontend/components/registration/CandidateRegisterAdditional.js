import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, Redirect } from 'react-router-dom';
import ProgressBarAdditional from './ProgressBarAdditional'
import Dropzone from 'react-dropzone';
import axios from 'axios';
import '../styles/styles.css';
import Header from '../Header';
import Footer from '../Footer';
import Container2 from '../Container2';

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
      console.log('candidate object when it is received', candidateObject)
      candidateObject.basic.github_url = this.state.github
      candidateObject.basic.linkedin_url = this.state.linkedin
      candidateObject.basic.website_url = this.state.website
      candidateObject.basic.resume_url = result.data.docs.resume
      candidateObject.basic.picture_url = result.data.docs.profilePic
      localStorage.setItem('candidateObject', JSON.stringify(candidateObject))

      candidateObject = JSON.parse(localStorage.getItem('candidateObject'))
      this.props.registerCand(candidateObject)


      // console.log('candidate object after it is altered', candidateObject)
      // return axios.post('/register-candidate', candidateObject)
    })
    // .then((regSuccess) => {
    //   console.log('am i in here')
    //   if (regSuccess === true){
    //     console.log('yayyy')
    //     this.props.history.push('/register/cand/pending')
    //   } else {
    //     console.log('nayyy')
    //     alert('Problem registering')
    //   }
    //   console.log('BEFORE REGISTER CAND IS CALLED')
    //   this.props.registerCand()
    //   this.props.history.push('/cand/pending')
    // })
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
    console.log('inside additional props', this.props)

    console.log('candidate object inside additional', candidateObject)
    if (this.props.loggedInCand){
      console.log('I should redirect')
      this.props.history.push('/register/cand/pending')
    }

    return (
      <div className="maindiv2" style={{backgroundColor: "#FAFAFA"}}>
        <Header />
        <Container2 unlimitedHeight={true}>
          <ProgressBarAdditional />
          <div className="thanksFor" style={{ marginTop: '30px', padding: 0}}>
            <div style={{display: 'flex', width: '100%', height: '500px', justifyContent: 'center' }}>
              <div id="picselect-div">
                <span className="regHeader" style={{paddingLeft: '5px'}}>Select profile picture</span>
                <div id="outer-circle-picselect">
                  <Dropzone
                    onDrop={this.onDropPicture}
                    alt="Drop or click to add a profile picture"
                    style={this.state.files.length === 0 ?
                      {
                        flex: ".9",
                        border: 'solid 2px #FAFAFA',
                        backgroundImage: 'url(/Camera.svg)',
                        backgroundSize: 'cover',
                        borderRadius: '50%',
                        height: '90%',
                        cursor: 'pointer',
                      } :
                      {
                        flex: ".9",
                        border: 'solid 2px #FAFAFA',
                        backgroundImage: `url(${this.state.files[0].preview})`,
                        backgroundSize: 'cover',
                        borderRadius: '50%',
                        height: '90%',
                        cursor: 'pointer',
                      }
                }>
                    {this.state.files.length === 0 ? '' :
                    <button
                      className="round-red-button"
                      onClick={() => this.deletePhoto()}>
                      x
                    </button>
                    }
                  </Dropzone>
                </div>
              </div>
              <div id="additional-form">
                <input
                  className="loginInput"
                  type="text"
                  name="github"
                  placeholder="Github URL"
                  onChange={this.handleAdditionalChange}
                />
                <br />
                <input
                  className="loginInput"
                  type="text"
                  name="linkedin"
                  placeholder="LinkedIn URL"
                  onChange={this.handleAdditionalChange}
                />
                <br />
                <input
                  className="loginInput"
                  type="text"
                  name="website"
                  placeholder="Personal Website URL"
                  onChange={this.handleAdditionalChange}
                />
                <br />
                <textarea
                  className="loginInput"
                  type="text"
                  name="selfbio"
                  onChange={this.handleAdditionalChange}
                  placeholder="Tell us about yourself..."
                  style={{"height": '100px', border: '3px dotted #CECECE', borderRadius: '10px',
                resize: 'none'}}
                />
                <br />
                {
                  this.state.resume.length === 0 ? '' :
                  <div>
                    <button className='small-grey-button' onClick={() => this.deleteResume()}> x </button>
                  </div>
                }
                <Dropzone
                  style={{"width": "100%", "height": "50px", cursor: 'pointer'}}
                  onDrop={this.onDropResume}
                >
                  <span>
                    <button className="resume-red-button">
                      {this.state.resume.length === 0 ? 'Upload your resume':
                        (
                          (this.state.resume[0].name.length > 19) ?
                          `${this.state.resume[0].name.substring(0, 20)}...` :
                          this.state.resume[0].name)
                    }</button>
                    <button className="resume-up-button">Choose File</button>
                  </span>
                </Dropzone>
              </div>
            </div>
          </div>
        </Container2>
        {/* <Link onClick={this.uploadBoth} style={{float: 'right'}} to="/cand/pending"> Done </Link> */}
        <div className="container-style-noshadow">
          <div style={{ flex: 1 }}>
            <Link className='red-button' to='/register/cand/profile'> Back </Link>
          </div>
          <div style={{ flex: 1 }}>
            <a className='grey-button' style={{float: 'right'}} onClick={this.uploadBoth}> Finish </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(CandidateRegisterAdditional);
