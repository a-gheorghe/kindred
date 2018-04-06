import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import Button from '../components/Button'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';


const AppContainer = ({ name }) => {
    return (
        <div>
            Hello
            {' '}
            <Link to='/'> Root </Link>
            {' '}
            <Link to='/login'> Login </Link>
            {' '}
            <Link to='/home'> Home </Link>
            <Header />
            <Title name={name} />
            <Button />
            <Footer />
        </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
