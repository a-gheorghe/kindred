import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'


class ReferrerRegister extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Referrer props', this.props)

    // if (this.props.loggedInRef === true) {
    //   if (this.props.target === '/referrerRegister'){
    //     return (
    //       <Redirect to='/allCandidates'/>
    //     )
    //   } else {
    //       return (
    //         <Redirect to={this.props.target} />
    //       )
    //   }
    // }

    return (
      <div>
        Register an employeee looking to refer candidates
        <form>
            Full Name: <input type="text" name="fullname" /> <br/>
            Current Company: <input type="text" name="company" /> <br/>
            Email: <input type="text" name="email" /> <br/>
            Password: <input type="password" name="password" /> <br/>
        </form>
            <button onClick={this.props.registerRef}> Register as Employee </button> <br/>
            <Link to='/login'> Already have an account? Log in! </Link>

      </div>
    )
  }
}

export default withRouter(ReferrerRegister);
