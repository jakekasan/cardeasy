import React, { Component } from "react";

class Signers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
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
            if (name && name != "" || email && email != "") {
                return acc + 1
            } else {
                return acc
            }
        }, 0);

        console.log(`Active input fields: ${activeInputFields}`);

        return activeInputFields
    }

    onUpdateSignerField(e) {
        e.persist();
        let test = "test";
        let id = Number(e.target.dataset.id);
        let fieldName = e.target.name;
        let value = e.target.value;

        console.log(`Attempting update id ${id} which is a ${fieldName} to ${value}`);

        this.setState((state) => {
            let formData = state.formData;
            let signers = formData.signers;
            if (signers.map((item, i) => i).includes(id) ) {
                signers = signers.map((item, itemIndex) => {
                    if (itemIndex == id) {
                        console.log(`Changind id ${id} to ${value}`)
                        item[fieldName] = value;
                    }
                    return item
                })
                // signers[id][fieldName] = value;
                // console.log(`id ${id} is in data, updating...`);
                // console.log(signers);
            } else {
                console.log(`id ${id} is not in data, adding...`);
                console.log(signers);
                let newObject = {
                    name: "",
                    email: ""
                };

                newObject[fieldName] = value;

                signers[id] = newObject;
            }

            signers = signers.filter((item) => {
                return item.email !== "" || item.name !== ""
            })

            state.formData.signers = signers;

            this.props.onChange((formData) => {
                formData.signers = signers;
                return formData
            });

            return state
        })
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
        let signers = this.state.formData.signers
            .map((item, id) => {
                return {id: id, ...item}
            })
            .map(item => {
                return this.makeInputsLi(item)
            })

        console.log(`Number of signer elements: ${signers.length}`)

        signers.push(this.makeInputsLi({
            id: signers.length,
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