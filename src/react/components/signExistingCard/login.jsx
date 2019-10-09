import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            wrongLogin: false
        }

        // housekeeping
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(event) {
        event.persist();
        event.preventDefault();
        console.log(event);

        let wrongLogin = this.state.wrongLogin;

        if (this.state.username != "master"){
            wrongLogin = true;
        } else {
            wrongLogin = false;
        }

        this.setState((state) => {
            return {
                username:"",
                password:"",
                wrongLogin: wrongLogin
            }
        });

        if (!wrongLogin) {
            this.props.onCorrectLogin(true);
        }
        
    }

    handleUsernameChange(e) {
        e.persist();
        this.setState(() => {
            return {
                username: e && e.target && e.target.value || "ERROR"
            }
        })
    }

    handlePasswordChange(e) {
        e.persist();
        this.setState(() => {
            return {
                password: e && e.target && e.target.value || "ERROR"
            }
        })
    }

    render() {
        return (
            <form action="" onSubmit = { (event) => this.handleSubmit(event) }>
                { (this.state.wrongLogin) ? <h1>WRONG LOGIIN!!!!!</h1> : null} 
                <input type="text" name="username" id="username" value = {this.state.username} onChange = { this.handleUsernameChange } />
                <input type="password" name="password" id="password" value = {this.state.password} onChange = { this.handlePasswordChange } />
                <input type="submit" value="Log In"/>
            </form>
        )
    }
}

export default Login;