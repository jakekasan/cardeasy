import React, { Component } from "react";

import Recipient from "./recipient.jsx";
import Content from "./content.jsx";
import Signers from "./signers.jsx";
import SubmitButton from "./submitButton.jsx";

class MakeNewCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {},
            message: {
                isSuccess:false,
                message:null
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.persist();

        e.preventDefault();

        console.log(this.state);
        // TODO: Should call out to API
        return
    }

    onSubmitSuccess(data) {
        this.setState((state) => {
            state.message = {
                isSuccess: true,
                message: "Card successfully submitted!"
            }
        })
    }

    onSubmitFailure(data) {
        this.setState((state) => {
            state.message = {
                isSuccess: false,
                message: data.message
            }
        })
    }

    handleChange(callBack) {
        this.setState((state) => {
            state.formData = callBack(state.formData);
            return state
        });
    }

    render() {
        return (
            <form id="newCard" onSubmit = {this.handleSubmit}>
                <Recipient onChange = { this.handleChange } />
                <Content onChange = { this.handleChange } />
                <Signers onChange = { this.handleChange } />
                <button type="submit" >Send your card!</button>
            </form>
        )
    }
}

export default MakeNewCard;