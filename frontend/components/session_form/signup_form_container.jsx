import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createNewUser, blankErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        otherLink: <Link to="/login">Login instead</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(createNewUser(user)),
        clearErrors: () => dispatch(blankErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);