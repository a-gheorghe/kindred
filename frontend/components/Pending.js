import React from 'react';
import { Link } from 'react-router-dom'



class Pending extends React.Component {
  render() {
    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))


//     let sendObj = {}
//     sendObj.basic = {
//       first_name: candidateObject.firstname,
//       last_name: candidateObject.lastname,
//       email: candidateObject.email,
//       password: candidateObject.password,
//       picture_url: candidateObject.profilepic,
//       location: candidateObject.city,
//       linkedin_url: candidateObject.linkedin,
//       github_url: candidateObject.github,
//       website_url: candidateObject.website
//
// }
    console.log('this is the object that will be sent', JSON.stringify(candidateObject))
    return (
      <div>
        Thanks for registering! We will review your application and email you shortly!
        <a href='/candidate'> Home </a>
      </div>
    )
  }
}

export default Pending;
