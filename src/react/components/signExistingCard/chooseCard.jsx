import React, { Component } from "react";

import Card from "./card.jsx";
import CardList from "./cardList.jsx";

class ChooseCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState(() => {

        })
    }

    handleSelectCard(e) {
        e.persist();
        console.log(e.target.dataset.cardNumber);
        this.setState((currentState) => {
            return {...currentState, selectedCard: e.target.dataset.cardNumber }
        });
    }

    handleDeselectCard(e) {
        this.setState((currentState) => {
            return {...currentState, selectedCard: null}
        });
    }

    render() {
        return (
            <section>
                ({ (this.state && this.state.selectCard) }) ? <Card /> : <CardList />
            </section>
        )
    }
}

export default ChooseCard;