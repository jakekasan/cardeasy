import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { StoreContext } from "./FormDataStore";
import { TitledContent, TitleElement } from "./Layout";
import { PaginationContext } from "./Pagination";

const CollaboratorListContainer = styled.div`
    height: 60vh;
    overflow:scroll;
    /* box-shadow: 2px 2px grey inset; */
    /* border: 1px solid grey; */
    padding: 10px 5px;
`;

const CollaboratorList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    /* min-height: 60vh; */
`;

const Collaborator = styled.li`
    display: flex;
    flex-direction: row;
`;

const CollaboratorField = styled.div`
    display: grid;
    place-items: center;
    position: relative;
    margin: 15px;
`;

const Input = styled.input`
    padding: 5px;
    height: 25px;

    /* &:focus + label {
        color: blue;
        top: -25px;
        left: -25px;
        transition: 0.2s;
        opacity: 0.5;
    } */
`;

// const Label = styled.label`
//     position: absolute;
//     top: 5px;
//     left: 50px;
//     transition: 0.2s;
//     opacity: 0;
// `;

const Label = styled.label`
    position: absolute;
    top: -15px;
    left: 0px;
    font-size: 0.5rem;
    opacity: 0.5;
`;

const fixCollabs = (collabs) => {
    let newCollabs = collabs.filter(item => !(item.name === "" && item.email === ""))
    if (collabs.length < 8) {
        newCollabs.push({name: "", email: ""})
    }
    return newCollabs
}

const EditableList = () => {
    const { get, set } = useContext(StoreContext);
    const [collaborators, setCollaborators] = useState(() => {
        let currentCollabs = get("collaborators");
        return fixCollabs(currentCollabs);
    })

    useEffect(() => {
        console.log({collaborators});
        return () => set("collaborators", collaborators)
    }, [collaborators]);

    const onChange = (i, type, value) => {
        setCollaborators(collabs => {
            collabs[i][type] = value;
            let newCollabs = fixCollabs(collabs);
            return newCollabs
        })
    }

    return (
        <CollaboratorList>
            {
                collaborators
                    .map((item, i) => {
                        return (
                            <Collaborator key={ i }>
                                {
                                    Object.entries(item)
                                        .map(([key, value]) => {
                                            console.log({key, value});

                                            let type = (key !== "name") ? "email" : key;
                                            let label = (key !== "name") ? "Email:" : "Name:"
                                            let id = `${key}_${i}`;
                                            return (
                                                <CollaboratorField key={ id }>
                                                    <Input
                                                        type="text"
                                                        id={ id }
                                                        onChange={ (event) => onChange(i, key, event.target.value) }
                                                        value={ value }/>
                                                    <Label htmlFor={ id }>{ label }</Label>
                                                </CollaboratorField>
                                            )
                                        })
                                }
                            </Collaborator>
                            )
                    })
            }
                                        
        </CollaboratorList>
    )
}

const SetCollaborators = () => {
    const { currentPage } = useContext(PaginationContext);
    const title = `Step ${currentPage + 1}: Enter the details of co-signers:`;
    return (
        <TitledContent>
            <TitleElement>{ title }</TitleElement>
            <CollaboratorListContainer>
                <EditableList />
            </CollaboratorListContainer>
        </TitledContent>
    )
}

export default SetCollaborators;