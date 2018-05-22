import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

/*
  Convert to actual component, and then check before mounting to see if user is logged in
  as ref... this should stop the flickering of the login page before loading a user's data

  ... needs testing
*/

// class PrivateRouteRef extends React.Component {
//   componentWillMount() {
//     this.checkAuthRef()
//       .then((resp) => {
//         console.log('logged in!');
//       })
//       .catch((err) => {
//         console.log('not logged in');
//         console.log(err);
//       }); // check to see if user is logged in on server as ref...
//   }
//
//   render() {
//     return (
//       <Route
//         {...this.props}
//         render={() => (this.props.loggedInRef === true ?
//           this.props.component :
//           <Redirect to={{
//               pathname: '/login',
//               // state: { from: props.location },
//             }}
//           />
//           )}
//       />
//     );
//   }
// }

const PrivateRouteRef = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (rest.loggedInRef === true ?
      <Component {...props} {...rest} /> :
      <Redirect to={{
          pathname: '/login',
          // state: { from: props.location },
        }}
      />
      )}
  />
);

PrivateRouteRef.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  // location: PropTypes.shape({
  //   pathname: PropTypes.string,
  // }),
  component: PropTypes.func.isRequired,
};

// PrivateRouteRef.defaultType

export default PrivateRouteRef;
