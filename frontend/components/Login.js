import React from 'react'
import { Redirect } from 'react-router-dom'


// component
class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      }
    }

  login = () => {
    this.props.auth.authenticate(() => {
      this.setState(() => ({
        loggedIn: true
      }))
    })
  }


  sendLogin(event){
    event.preventDefault();
    axios.post('/login', {
      username: event.target.username.value,
      password: event.target.password.value
    }).then((resp) => {
      if (resp.data === true) {
        console.log('resp data true')
        this.setState(() => ({
          loggedIn: true
        }))
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    console.log('login this.props', this.props)
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { loggedIn } = this.state

    if (loggedIn === true) {
      console.log('inside logged in true', from.pathname)
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
        <button onClick={this.login}>LOGIN</button>
      </div>
    )
  }
}

export default Login;
