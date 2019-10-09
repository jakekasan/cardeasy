import React, { Component } from "react";

import Login from "./login.jsx";
import ChooseCard from "./chooseCard.jsx";

class SignExistingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        };

        this.handleCorrectLogin = this.handleCorrectLogin.bind(this);
    }

    componentDidMount() {
        console.log("SignExistingCard mounted");
    }

    handleCorrectLogin(userData) {
        this.setState(() => {
            return {userData: userData}
        })
    }

    render() {
        return (
            <div>
                { (this.state && this.state.userData) ? <ChooseCard userData = {this.state.userData} /> : <Login onCorrectLogin = { (userData) => this.handleCorrectLogin(userData) }/> }
            </div>
        )
    }
}

export default SignExistingCard;