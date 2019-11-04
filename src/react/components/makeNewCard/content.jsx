import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <label htmlFor="message">Write your message:</label>
                <input type="text" name="message" id="message"/>
            </section>
        )
    }
}

export default Content;