import React from 'react';
import { Link } from 'react-router-dom';

import './styles/styles.css';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';


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
      <div className="maindiv pendingContainer">
        <Header style={{backgroundColor: 'white'}} />
        <Container>
            <div className="pending">
              <img src="/Mail.svg" />
              <span className="pending-text">
                Thanks for registering!
                We will review your application and email you shortly.
              </span>
              {/* <a href='/candidate'> Home </a> */}
            </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Pending;
