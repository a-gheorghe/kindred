import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link, withRouter } from 'react-router-dom';


class CandidateRegister extends React.Component {
  // Ignore linter errors: additional methods will go here; not necessary to
  // switch to pure function. <--- Delete me when new methods are added.

  render() {
    console.log('Candidate props', this.props);

    if (this.props.loggedInCand === true) {
      console.log('here i am');
      if (this.props.target === '/candidateRegister') {
        console.log('register');
        return (
          <Redirect to="/candidateRegisterOne" />
        );
      }
      console.log('there');
      return (
        <Redirect to={this.props.target} />
      );
    }

    return (
      <div>
        Candidate Registration
        <form>
              First Name: <input type="text" name="firstname" /> <br />
              Last Name: <input type="text" name="lastname" /> <br />
              Email: <input type="text" name="email" /> <br />
              Password: <input type="password" name="password" /> <br />
              Repeat Password: <input type="password" name="repeatpassword" /> <br />
        </form>
        <button onClick={this.props.registerCand}> Register as a Candidate </button><br />
        <Link to="/login"> Already have an account? Log in! </Link> {/* Ignore href lint err */}
      </div>
    );
  }
}

CandidateRegister.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  registerCand: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
};

export default withRouter(CandidateRegister);
