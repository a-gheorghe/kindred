import React from 'react'
import { Redirect } from 'react-router-dom'


// component
class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        loggedInCand: false
      }
    }

  loginCand = () => {
    this.props.authCand.authenticate(() => {
      this.setState(() => ({
        loggedInCand: true
      }))
    })
  }

  //
  // sendLogin(event){
  //   event.preventDefault();
  //   axios.post('/login', {
  //     username: event.target.username.value,
  //     password: event.target.password.value
  //   }).then((resp) => {
  //     if (resp.data === true) {
  //       console.log('resp data true')
  //       this.setState(() => ({
  //         loggedIn: true
  //       }))
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { loggedInCand } = this.state
    console.log('log in', this.props)

    if (loggedInCand === true) {
      return (
        <Redirect to={from.pathname}/>
      )
    }

    return (
      <div>
        <p> You must log in to view the page </p>
        {/* <form onSubmit={() => this.login()} > */}
        <form>
          Username: <input type="text" name="username" /> <br/>
          Password: <input type="password" name="password" />
          {/* <input type="submit" value="Login"/> */}
        </form>
        <button onClick={this.loginCand}>LOGIN</button>
      </div>
    )
  }
}

export default Login;
