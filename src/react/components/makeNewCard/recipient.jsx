import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recipient extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.persist();

        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        this.props.onChange((formData) => {
            let update = {};
            update[fieldName] = fieldValue;
            formData.recipient = {...formData.recipient, ...update };
            return formData
        })
    }

    render() {
        return (
            <section id="recipientSection">
                <label htmlFor="recipientName">Name of recipient:</label>
                <input type="text" name="recipientName" id="recipientName" onChange = { this.handleChange } />
                <label htmlFor="recipientEmail">Name of recipient:</label>
                <input type="email" name="recipientEmail" id="recipientEmail" onChange = { this.handleChange } />
            </section>
        )
    }
}

export default Recipient;