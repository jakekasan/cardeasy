import React, { Component } from "react";

import Login from "./login.jsx";
import ChooseCard from "./chooseCard.jsx";

class SignExistingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        };
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
                { (this.state && this.state.userData) ? <ChooseCard userData = {this.state.userData} /> : <Login onCorrectLogin = { (userData) => handleCorrectLogin(userData) }/> }
            </div>
        )
    }
}

export default SignExistingCard;