import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { StoreContext } from "./FormDataStore";
import { TitleElement, TitledContent } from "./Layout";

import Classic from "./../cards/Classic";

const ResultsView = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const GetResults = () => {

    const { getAll } = useContext(StoreContext);
    const formData = getAll();

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    // const { designs: { getById: designById }, occasions: { getById: occasionById} } = useContext(DataStoreContext)
    const { collaborators, recipient, sender, occasion, message } = formData;

    return (
        <TitledContent>
            <TitleElement>{"Check what you're about to send!"}</TitleElement>
            <ResultsView>
                <Classic
                    collaborators={ collaborators }
                    recipient={ recipient }
                    sender={ sender }
                    occasion={ occasion }
                    message={ message }
                    />
            </ResultsView>
        </TitledContent>
    )
}

export const SampleResult = ({ children }) => {
    return (
        <TitledContent>
            <TitleElement>{"Check what you're about to send!"}</TitleElement>
            <ResultsView>
                { children }
            </ResultsView>
        </TitledContent>
    )
}

SampleResult.propTypes = {
    children: PropTypes.oneOf([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

export default GetResults;