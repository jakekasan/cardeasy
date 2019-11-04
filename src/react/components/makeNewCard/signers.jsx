import React, { Component } from "react";

class Signers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signers: [
                {
                    name: "Jake",
                    email: "me@mail.com"
                },
                {
                    name: "Carla",
                    email: "carla@mail.com"
                }
            ]
        }

        this.activeInputFields = this.activeInputFields.bind(this);
        this.onUpdateSignerField = this.onUpdateSignerField.bind(this);
    }

    activeInputFields(){
        let signerKeys = Object.keys(this.state.signers);

        let signerArray = signerKeys.map(item => {
            return { id:item, ...this.state.signers[item] }
        });

        let activeInputFields = this.state.signers.reduce((acc, cur) => {
            let { name, email } = cur;
            if (name && name != "" && email && email != "") {
                return acc + 1
            } else {
                return acc
            }
        }, 0);

        console.log(activeInputFields);

        return activeInputFields
    }

    onUpdateSignerField(e) {
        e.persist();
        let id = e.target.dataset.id;
        let name = e.target.name;

        let newData = {};
        newData[name] = e.target.value;

        this.setState((state) => {
            let oldData = state.signers[id] || {};

            let reconciled = {...oldData, ...newData};
            if (reconciled.name != "" || reconciled.email != "") {
                state.signers[id] = reconciled;
            } else {
                state.signers.pop(id);
            }

            console.log(state);
            
            return state
        });
    }

    makeInputsLi({id, name, email}){
        console.log(`Rendering id: ${id}, name: ${name}, email: ${email}`);
        return (
            <li key={id}>
                <input type="text" name="name" id="name" data-id={id} value = {name} onChange = {this.onUpdateSignerField} />
                <input type="email" name="email" id="email" data-id={id} value = {email} onChange = {this.onUpdateSignerField}/>
            </li>
        )
    }

    render() {
        let signers = this.state.signers
            .map((item, id) => {
                return {id: id, ...item}
            })
            .map(item => {
                return this.makeInputsLi(item)
            })

        signers.push(this.makeInputsLi({
            id: this.activeInputFields() + 1,
            name: "",
            email: ""
        }))

        return (
            <section id="signersSection">
                <label htmlFor="signersList">Signers:</label>
                <ul id="signersList" name="signersList">
                    { signers }
                </ul>
            </section>
            
        )
    }
}

export default Signers;