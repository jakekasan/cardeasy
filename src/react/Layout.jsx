import React from "react";
import styled from "styled-components";

const TitleElement = styled.h2`
    display: grid;
    place-items: center;
    color: ${props => props.theme.colors.dark.primary};
    text-decoration: underline;
    line-height: 2.5rem;
    text-underline-offset: 10px;
`;

const TitledContent = styled.article`
    width: ${props => props.theme.appWidth}px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export {
    TitleElement,
    TitledContent
}