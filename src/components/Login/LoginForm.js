import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div id="login-form">
                <p className="heading">Login to your account</p>
                <span>Don't have an account? <Link to="/signup"> Sign Up now!</Link></span>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">User Name</label>
                    <div><input type="text" name="username"></input></div>
                    <label htmlFor="password">Password</label>
                    <div><input type="text" name="password"></input></div>
                    <input className="submit-btn" type="submit" value="Login" ></input>
                </form>
            </div>
        )
    }
}

export default LoginForm;