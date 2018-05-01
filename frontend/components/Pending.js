import React from 'react';
import { Link } from 'react-router-dom';

import './styles/styles.css';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';


class Pending extends React.Component {
  render() {

    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))
    console.log('props in pending', this.props)
    console.log('this is the object that will be sent', candidateObject)
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
