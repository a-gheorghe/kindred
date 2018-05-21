import React from 'react';
import Dropzone from 'react-dropzone';
import { HashLink as Link } from 'react-router-hash-link';


export default class ProfileSideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('profile side bar props', this.props);


    return (
      <div>
        <Dropzone onDrop={this.props.onDropPicture}>
          {this.props.basic.picture_url === '' ?
            <div> Upload a picture </div> :
            <img style={{ height: '100%' }} src={this.props.basic.picture_url} />}
        </Dropzone>
        <div> <b>{this.props.basic.first_name} {this.props.basic.last_name}</b> </div>
        <div> {this.props.basic.location}</div>
        <div> {this.props.eduArr[0].major} @ {this.props.eduArr[0].school_name}</div>
        <Link style={{ border: '1px solid black', width: '150px', margin: '5px' }} to="/cand/selfprofile#work">Work Experience</Link>
        <Link style={{ border: '1px solid black', width: '150px', margin: '5px' }} to="/cand/selfprofile#projects">Projects</Link>
        <Link style={{ border: '1px solid black', width: '150px', margin: '5px' }} to="/cand/selfprofile#skills">Skills</Link>
      </div>
    );
  }
}
