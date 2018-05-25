import React from 'react';
import Dropzone from 'react-dropzone';
import { HashLink as Link } from 'react-router-hash-link';

import './styles/styles.css';


export default class ProfileSideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('profile side bar props', this.props);


    return (
      <div className="sidebar">
        <div className="sidebar-pic">
          <Dropzone
            onDrop={this.props.onDropPicture}
            style={{ width: '100%', height: '100%' }}
          >
            {this.props.basic.picture_url === '' ?
              <div> Upload a picture </div> :
              <img alt="profile" style={{ maxWidth: '100%', mamaxHeight: '100%', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} src={this.props.basic.picture_url} />}
            {/* HOVER IMAGE */}
          </Dropzone>
        </div>
        <div className="sidebar-bottom">
          <div className="name-ed">
            <div id="sidebar-name"> <b>{this.props.basic.first_name} {this.props.basic.last_name}</b> </div>
            <div id="sidebar-loc"> {this.props.basic.location}</div>
            <div id="sidebar-ed"> {this.props.eduArr[0].major} </div>
            <div id="sidebar-ed"> @ {this.props.eduArr[0].school_name} </div>
          </div>
          <div className="sidebar-links">
            <Link id="sidebar-1" to="/cand/selfprofile#work">
              <img alt="briefcase" src="/SidebarWork.svg" style={{ paddingRight: '20px' }} />Work Experience
            </Link>
            <Link id="sidebar-1" to="/cand/selfprofile#projects">
              <img alt="briefcase" src="/SidebarProject.svg" style={{ paddingRight: '20px' }} />Projects
            </Link>
            <Link id="sidebar-1" to="/cand/selfprofile#skills">
              <img alt="briefcase" src="/SidebarSkills.svg" style={{ paddingRight: '20px' }} />Skills
            </Link>
          </div>
          <div className="sidebar-socials">
            <img alt="briefcase" src="/SidebarSocials.svg" />
          </div>
        </div>
      </div>
    );
  }
}
