import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <input type="text" name="message" id="message"/>
                <label htmlFor="message">Write your message:</label>
            </section>
        )
    }
}

export default Content;