import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { StoreContext } from "./FormDataStore";
import { DataStoreContext } from "./InfoDataStores";
import { TitleElement, TitledContent } from "./Layout";

import Classic from "./cards/Classic";

const ResultsView = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const ResultsItemElement = styled.div`
    margin: 10px;
    padding: 10px 20px;
    min-width: 200px;
    min-height: 100px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 25px;
    box-shadow: 4px 2px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
`;

const ResultsItemTitle = styled.h5`
    /* flex: 1 1 0; */
    margin: 0;
    padding: 0;
`;

const ResultsItemContent = styled.section`
    /* flex: 2 1 0; */
    margin: 0;
    padding: 0;
    display:grid;
    place-items: center;
`;

const ResultsItem = ({ title, children }) => {
    return (
        <ResultsItemElement>
            <ResultsItemTitle>{ title }</ResultsItemTitle>
            <ResultsItemContent>{ children }</ResultsItemContent>
        </ResultsItemElement>
    )
}

const OccasionResults = ({ occasionId }) => {
    const { occasions: { getById }} = useContext(DataStoreContext);
    const [text, setText] = useState("");

    useEffect(() => {
        getById(occasionId)
            .then(occasion => setText(occasion.text))
            .catch(() => {
                console.log(`Can't find occasion with id ${occasionId}`);
                setText("< none >")
            })
    }, [])

    return (
        <ResultsItem title={ "Occasion:" }>
            <p>{ text }</p>
        </ResultsItem>
    )
}

const DesignResults = ({ designId }) => {
    const { designs: { getById }} = useContext(DataStoreContext);
    const [text, setText] = useState("");
    
    useEffect(() => {
        getById(designId)
            .then(design => setText(design.text))
            .catch(() => {
                console.log(`Can't find design with id ${designId}`);
                setText("< none >")
            })
    }, [])

    return (
        <ResultsItem title={ "Design:" }>
            <p>{ text }</p>
        </ResultsItem>
    )
}

const Collaborators = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
`;

const Collaborator = styled.li`

`;

const CollabName = styled.p`
    color: gray;
`;

const CollabEmail = styled(CollabName);

const CollaboratorsResults = ({ collaborators }) => {

    if (collaborators === undefined || collaborators.length) {
        return null
    }

    return (
        <ResultsItem title={ "Collaborators:"}>
            <Collaborators>
                { collaborators.map(collab => {
                    return (
                        <Collaborator>
                            <CollabName>
                                { collab.name }
                            </CollabName>
                            <CollabEmail>
                                { collab.email }
                            </CollabEmail>
                        </Collaborator>
                    )
                }) }
            </Collaborators>
        </ResultsItem>
    )
}

const SendTimeResults = ({ sendDatetime }) => {
    return (
        <ResultsItem title="Send date:">
            <p>{ sendDatetime.toString() }</p>
        </ResultsItem>
    )
}

const MessageResults = ({ message }) => {
    return (
        <ResultsItem title="Card message:">
            <p>{ message }</p>
        </ResultsItem>
    )
}

const GetResults = () => {

    const { getAll } = useContext(StoreContext);
    const formData = getAll();

    useEffect(() => {
        console.log(formData);
    }, []);

    const { designs: { getById: designById }, occasions: { getById: occasionById} } = useContext(DataStoreContext)

    return (
        <TitledContent>
            <TitleElement>Check what you're about to send!</TitleElement>
            <ResultsView>
                <Classic {...formData} />
            </ResultsView>


        </TitledContent>
    )
}

export const SampleResult = ({ children }) => {
    return (
        <TitledContent>
            <TitleElement>Check what you're about to send!</TitleElement>
            <ResultsView>
                { children }
            </ResultsView>
        </TitledContent>
    )
}

export default GetResults;