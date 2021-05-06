import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="sign-up-form">
                <p className="heading">Sign Up for an account!</p>
                <span>Already have an account? <Link to="/login">Login here!</Link></span>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">User Name</label>
                    <div><input type="text" name="username"></input></div>
                    <label htmlFor="email">Email</label>
                    <div><input type="text" name="email"></input></div>
                    <label htmlFor="email-confirm">Confirm Email</label>
                    <div><input type="text" name="email-confirm"></input></div>
                    <label htmlFor="password">Password</label>
                    <div><input type="text" name="password"></input></div>
                    <input className="submit-btn" type="submit" value="Submit" ></input>
                </form>
            </div>
        )
    }
}

export default SignUpForm;