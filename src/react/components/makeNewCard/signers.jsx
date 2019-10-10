import React, { Component } from "react";

class Signers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipients: {}
        }
    }

    getNewRecipients(){
        let recipientKeys = Object.keys(this.state.recipients);

        let recipientArray = recipientKeys.map(item => {
            return { id:item, ...this.state.recipients[item] }
        });

        let activeInputFields = this.state.reduce((acc, cur) => {
            let { name, email } = cur;
            if (name && name == "" && email && email == "") {
                return acc + 1
            } else {
                return acc
            }
        }, 0);

        return activeInputFields
    }

    onUpdateRecipientField(e) {
        e.persist();
        let id = e.target.dataset.id;
        this.setState((state) => {
            let targetId = state.recipient[id];

            targetId[e.target.name] = e.target.value;

            state.recipient[id] = targetId;
            return state
        });
    }

    makeInputsLi(id){
        return (
            <li>
                <input type="text" name="name" id="name" data-id={id} onChange = {this.onUpdateRecipientField} />
                <input type="email" name="email" id="email" data-id={id} onChange = {this.onUpdateRecipientField}/>
            </li>
        )
    }

    render() {
        

        return (
            <ul>
                { recipients }
            </ul>
        )
    }
}

export default Signers;