import React from 'react';
import Dropzone from 'react-dropzone';

class ProfileSideBar extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  console.log('profile side bar props', this.props)


  return (
    <div>
      <Dropzone onDrop={this.props.onDropPicture}>
        {this.props.pictureUrl === "" ?
        <div> Upload a picture </div> :
        <img style={{"height": "100%"}} src={this.props.basic.pictureUrl} />}
      </Dropzone>
      <div> <b>{this.props.basic.first_name} {this.props.basic.last_name}</b> </div>
      <div> {this.props.basic.location}</div>
      <div> {this.props.eduArr[0].major} @ {this.props.eduArr[0].school}</div>
      <div style={{border: '1px solid black', width: '150px', margin: '5px'}}> Work Experience </div>
      <div style={{border: '1px solid black', width: '150px', margin: '5px'}}> Projects </div>
      <div style={{border: '1px solid black', width: '150px', margin: '5px'}}> Skills </div>
    </div>
  );
}
};

export default ProfileSideBar;
