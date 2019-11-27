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
            message: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.persist();

        e.preventDefault();

        // TODO: Should call out to API
        // For now just pretend all is well

        return this.localValidateData(this.state.formData)
            .then(({data}) => {
                return new Promise( (resolve, reject) => {
                    console.log("Inside promise?");
                    resolve({
                        isSuccess: true,
                        message: "Card submitted successfully!"
                    })
                })
                    .then(data => {
                        console.log("Data inside localValidateData success Promise");
                        console.log(data);
                        return this.onSubmitSuccess(
                            {
                                isSuccess: true,
                                message: "Card submitted successfully!"
                            }
                        )
                    })
            })
            .catch(({ message }) => {
                let errorObject = {
                    message: message,
                    isSuccess: false
                }
                console.log("Promise failed!");
                console.log(errorObject);
                this.onSubmitFailure(errorObject);
            })
        
    }

    localValidateData(data) {
        // if data is improperly formatted, don't other sending to the server
        // returns true if data is valid
        console.log("Validating form data...");
        return new Promise((resolve, reject) => {

            if (! (data.signers && data.signers.length > 0) ) {
                return reject({
                    message: "Need at least 1 person to sign the card... do we?",
                    data:data
                });
            }
    
            if (data.signers.map((item) => item.name === "" || item.email === "").includes(true)) {
                return reject({
                    message: "A recipient is missing a name or email",
                    data:data
                });
            }

            return resolve({
                message: "All is well",
                data: data
            })
        })

    }

    onSubmitSuccess(data) {
        console.log("Setting state.message to");
        console.log(data);
        this.setState((state) => {
            state.message = data
            return state
        })
    }

    onSubmitFailure(data) {
        this.setState((state) => {
            state.message = data
            return state
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
            <form id="newCard" onSubmit = {this.handleSubmit} noValidate>
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