import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        }

        // housekeeping
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    handleUsernameChange(e) {
        console.log(e);
        return
        this.setState(() => {
            return {
                username: e.target.value
            }
        })
    }

    handlePasswordChange(e) {
        console.log(e);
        return
        this.setState(() => {
            return {
                password: e.target.value
            }
        })
    }

    render() {
        return (
            <form action="" onSubmit = { (event) => this.handleSubmit(event) }>
                <input type="text" name="username" id="username" value = {this.state.username} onChange = { this.handleUsernameChange } />
                <input type="password" name="password" id="password" value = {this.state.password} onChange = { this.handlePasswordChange } />
                <input type="submit" value="Log In"/>
            </form>
        )
    }
}

export default Login;