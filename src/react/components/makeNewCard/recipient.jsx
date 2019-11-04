import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recipient extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="recipientSection">
                <label htmlFor="recipientName">Name of recipient:</label>
                <input type="text" name="recipientName" id="recipientName"/>
                <label htmlFor="recipientEmail">Name of recipient:</label>
                <input type="email" name="recipientEmail" id="recipientEmail"/>
            </section>
        )
    }
}

export default Recipient;