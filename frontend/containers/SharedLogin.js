import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import LoginFrom from '../components/LoginForm';


const SharedLogin = ({ name }) => {
    return (
        <div>
            <Header />
            <LoginForm />
        </div>
    );
};

SharedLogin.propTypes = {
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
)(SharedLogin);
