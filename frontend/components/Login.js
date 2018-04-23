import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return (
      <form>
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button label="Submit" primary type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({ type: 'LOGIN' }),
});

export default connect(null, mapDispatchToProps)(Login);
