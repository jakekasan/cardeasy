import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.persist();
        
        console.log(event);

        let cardMessage = event.target.value;

        this.props.onChange((formData) => {
            formData.cardMessage = cardMessage;
            return formData
        })
    }

    render() {
        return (
            <section>
                <label htmlFor="message">Write your message:</label>
                <input type="text" name="message" id="message" onChange = { this.handleChange }/>
            </section>
        )
    }
}

export default Content;