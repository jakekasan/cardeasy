import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recipient extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h3>Recipient</h3>
                <input type="text" name="recipientName" id="recipientName"/>
                <label htmlFor="recipientName">Name of recipient:</label>
                <input type="email" name="recipientEmail" id="recipientEmail"/>
                <label htmlFor="recipientEmail">Name of recipient:</label>
            </section>
        )
    }
}

export default Recipient;