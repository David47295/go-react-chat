import React from 'react';

class Login extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div id="login">
                <div className="login-form">
                    <p className="heading">Login to your account</p>
                    <form onSubmit={this.handleSubmit}>
                        <label for="username">User Name</label>
                        <div><input type="text" name="username"></input></div>
                        <label for="password">Password</label>
                        <div><input type="text" name="password"></input></div>
                        <input className="submit-btn" type="submit" value="Login" ></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;