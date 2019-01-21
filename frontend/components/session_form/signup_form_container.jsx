import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createNewUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors,
        formType: 'signup',
        otherLink: <Link to="/login">Login instead</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(createNewUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);