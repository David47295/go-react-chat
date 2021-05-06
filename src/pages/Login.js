import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import SignUpForm from '../components/Login/SignUpForm';
import LoginForm from '../components/Login/LoginForm';
import '../style/Login.css'

class Login extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div id="login">
                <Switch>
                    <Route path="/signup">
                        <SignUpForm />
                    </Route>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Login;