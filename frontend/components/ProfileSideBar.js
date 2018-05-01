import React from 'react';


const ProfileSideBar = (props) => {
  return (
    <div style={{'border': '1px solid green'}}>
      <img src={props.picture} />
      Here is the profile picture
    </div>
  );
};

export default ProfileSideBar;
