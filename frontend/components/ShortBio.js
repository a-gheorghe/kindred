import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ShortBio = () => (
  <div style={{ border: '1px solid black' }}>
    <h3> Candidate Picture </h3>
    <div>
      Candidate Info
      <br />
      <Link
        style={{
          textDecoration: 'none',
          color: 'white',
          backgroundColor: 'blue',
          borderRadius: '2px',
        }}
        to="/messages"
      >
        Connect
      </Link>
      <br />
      <Link
        style={{
           textDecoration: 'none',
           color: 'white',
           backgroundColor: 'green',
           borderRadius: '2px',
        }}
        to="/candidateExternalProfile"
      >
        Candidate&apos;s Profile
      </Link>
    </div>
  </div>
);

export default ShortBio;
