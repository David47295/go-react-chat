import React from 'react';
import '../style/SignUp.css'

class SignUp extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div id="sign-up">
                <div className="sign-up-form">
                    <p className="heading">Sign Up for an account!</p>
                    <form onSubmit={this.handleSubmit}>
                        <label for="username">User Name</label>
                        <div><input type="text" name="username"></input></div>
                        <label for="email">Email</label>
                        <div><input type="text" name="email"></input></div>
                        <label for="email-confirm">Confirm Email</label>
                        <div><input type="text" name="email-confirm"></input></div>
                        <label for="password">Password</label>
                        <div><input type="text" name="password"></input></div>
                        <input className="submit-btn" type="submit" value="Submit" ></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;