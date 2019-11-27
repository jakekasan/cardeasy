import React, { Component } from "react";

import Recipient from "./recipient.jsx";
import Content from "./content.jsx";
import Signers from "./signers.jsx";
import Message from "./message.jsx";

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
        // For now just pretend all is well

        return this.onSubmitSuccess({})
    }

    onSubmitSuccess(data) {
        this.setState((state) => {
            state.message = {
                isSuccess: true,
                message: "Card successfully submitted!"
            }
            return state
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
                <Message content = { this.state.message } />
                <Recipient onChange = { this.handleChange } />
                <Content onChange = { this.handleChange } />
                <Signers onChange = { this.handleChange } />
                <button type="submit" >Send your card!</button>
            </form>
        )
    }
}

export default MakeNewCard;