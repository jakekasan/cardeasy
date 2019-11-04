import React, { Component } from "react";

import Recipient from "./recipient.jsx";
import Content from "./content.jsx";
import Signers from "./signers.jsx";

class MakeNewCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h1>Make a new card!</h1>
                <Recipient />
                <Content />
                <Signers />
            </section>
        )
    }
}

export default MakeNewCard;