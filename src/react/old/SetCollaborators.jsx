import React, { useRef, useState, useContext, useCallback, useEffect } from "react";
import { Title, Content } from "./Layout";
import { PaginatorContext, Paginator } from "./Paginator";

const Collaborator = ({ index, name, email, onChange }) => {
    return (
        <>
            <label htmlFor="name"></label>
            <input data-index={ index } type="text" name="name" value={ name } onChange={ onChange }/>
            <label htmlFor="email"></label>
            <input data-index={ index } type="email" name="email" value ={ email } onChange={ onChange }/>
        </>
    )
}

const CollaboratorList = () => {

    const [ collaborators, setCollaborators ] = useState([]);

    const collaboratorOnChange = useCallback((event) => {
        const {
            target: {
                name,
                value,
                datasetIndex: index }
        } = event;

        setCollaborators((currentCollaborators) => {
            let currentCollaborator = currentCollaborators[index];
            currentCollaborators[index] = {...currentCollaborator, [name]: value };
            return currentCollaborators
        })
    })

    useEffect(() => {
        setCollaborators((currentCollaborators) => currentCollaborators.filter(collaborator => collaborator.name !== "" && collaborator.email !== ""))
    }, [collaborators])

    return (
        <ul>
            { collaborators.map((collaborator, i) => <Collaborator {...collaborator} onChange={  } />) }
        </ul>
    )
}

export const SetCollaborators = () => {
    const { currentPage } = useContext(PaginatorContext);

    return (
        <>
            <Title>{ currentPage + 1 }: Add the people you'd like to sign this card with you!</Title>
            <Content>

            </Content>
        </>
    )

}