import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ sessionReducer, entitiesReducer: { users } }) => {
    //Set the session to null if it doesnt exist, otherwise will find ID 
    const session = sessionReducer.currentUser || {};
    return {
        currentUser: users[session.id],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),  
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);