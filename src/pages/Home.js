import React from 'react';
import { Link } from "react-router-dom";
import '../style/Home.css'

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <div id="banner">
                    <p>Welcome to Go Chat!</p>
                    <div className="buttons">
                        <Link id="sign-up-btn" to="/signup">
                            <button>Sign Up</button>
                        </Link>
                        <Link id="login-btn" to="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;