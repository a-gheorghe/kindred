import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import '../styles/styles.css';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        ref: true,
        cand: false,
        email: '',
        password: '',
      }
  }

  handleChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  refClick = () => this.setState({
    cand: false,
    ref: true,
  })

  candClick = () => this.setState({
    cand: true,
    ref: false,
  })

  submitRef = () => {
    this.props.loginRef(this.state.email, this.state.password)
    .then(() => {
      console.log('this.props.loggedInRef1', this.props.loggedInRef);
      if (this.props.loggedInRef) {
        this.props.history.push('/ref/my/profile');
      }
    })
    console.log('this.props.loggedInRef2', this.props.loggedInRef);
    // if (this.props.loggedInRef) {
    //   this.props.history.push('/ref/my/profile');
    // }
  }


  render() {
    const { cand, ref } = this.state;
    // const { from } = this.props.location.state || { from: { pathname: '/' } }

    const {
      loggedInCand, loggedInRef, loginRef, loginCand,
    } = this.props;

    // if (loggedInCand) {
    //   return (
    //     <Redirect to="/cand/selfprofile" />
    //   );
    // } else if (loggedInRef) {
    //   return (
    //     <Redirect to="/ref/messages" />
    //   );
    // }
    console.log('i am rendering login comp');
    return (
      <div className="maindiv">
        <Header />
        <img src="../background.svg" style={{position: 'fixed', bottom: '0px', width: '100%', zIndex: '-1'}}/>
        <Container className="center">
          <div className="loginDiv">
            <div className="loginHeader">Sign into KindredTalent</div>
            <Button.Group>
              <Button toggle active={ref} onClick={this.refClick}>Referrer</Button>
              <Button toggle active={cand} onClick={this.candClick}>Candidate</Button>
            </Button.Group>
            <div className="loginBox">
              <input className="loginInput" placeholder="Email" style={{marginBottom: "45px"}} type="text" name="email" value={this.state.email} onChange={this.handleChange} />
              <input className="loginInput" placeholder="Password" style={{marginBottom: "20px"}} type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              <div className="loginRemember">
                <label className="loginLabel">
                  <input type="checkbox" value="" className="loginCheck"/>
                  Remember Me
                </label>
                </div>
                {/* Change button to call loginCand if Cand or loginRef if Ref */}
              {this.state.cand ?
                <Button
                  onClick={() => loginCand(this.state.email, this.state.password)}
                  className="loginButton"
                >
                  Sign In
                </Button> :
                <Button
                  onClick={() => this.submitRef()}
                  className="loginButton"
                >
                  Sign In
                </Button>
              }
            </div>
            <a className="loginA" href="#">Forgot Password?</a>
          </div>
          <div className="loginSignup">
            Don’t have an account? <a className="loginASign" href="/app/register">Sign Up</a>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  loggedInRef: PropTypes.bool.isRequired,
  loginRef: PropTypes.func.isRequired,
  loginCand: PropTypes.func.isRequired,
};

export default withRouter(Login);
