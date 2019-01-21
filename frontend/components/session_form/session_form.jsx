import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        const typeHeader = (this.props.formType === 'login' ? 'Login' : 'Sign Up');
        const currentErrors = this.props.errors || [];
        const errorsList = currentErrors.map((error, i) => {
            return (
                <li key={i}>
                    {error}
                </li>
            );
        });
        return (
            <>
                <h2>{typeHeader} or {this.props.otherLink}</h2>
                <ul>
                    {errorsList}
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <label> Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')}/>
                    </label>
                    <label> Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <input type="submit" value={typeHeader}/>
                </form>
            </>
        )
    }
}

export default SessionForm;