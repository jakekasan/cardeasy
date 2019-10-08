import React, { Component } from "react";

import Login from "./login.jsx";
import ChooseCard from "./chooseCard.jsx";

class SignExistingCard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("SignExistingCard mounted");
    }

    render() {
        return (
            <div>
                { (this.props.userData) ? <ChooseCard userData = {this.props.userData} /> : <Login /> }
            </div>
        )
    }
}

export default SignExistingCard;