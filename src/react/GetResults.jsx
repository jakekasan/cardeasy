import React, { useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "./FormDataStore";
import { DataStoreContext } from "./InfoDataStores";
import { TitleElement, TitledContent } from "./Layout";

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
    flex: 1 1 0;
    margin: 0;
    padding: 0;
`;

const ResultsItemContent = styled.section`
    flex: 3 1 0;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.dark.tertiary};
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
    const { text: occasionName } = getById(occasionId);

    return (
        <ResultsItem title={ "Occasion" }>
            <p>{ occasionName }</p>
        </ResultsItem>
    )
}

const DesignResults = ({ designId }) => {
    const { designs: { getById }} = useContext(DataStoreContext);
    const { text: designName } = getById(designId);

    return (
        <ResultsItem title={ "Design" }>
            <p>{ designName }</p>
        </ResultsItem>
    )
}

const GetResults = () => {

    const { getAll } = useContext(StoreContext);
    const {
        design,
        occasion,
        collaborators,
        sendDatetime,
        message
    } = getAll();

    const { designs: { getById: designById }, occasions: { getById: occasionById} } = useContext(DataStoreContext)

    return (
        <TitledContent>
            <TitleElement>Check what you're about to send!</TitleElement>
            <ResultsView>
                <DesignResults designId={ design } />
                <OccasionResults occasionId={ occasion } />
            </ResultsView>
        </TitledContent>
    )
}

export default GetResults;