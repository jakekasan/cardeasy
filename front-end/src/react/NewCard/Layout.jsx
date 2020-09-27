import styled from "styled-components";

/* tslist:disable */
const TitleElement = styled.h2`
    display: grid;
    place-items: center;
    color: ${props => props.theme.colors.dark.primary};
    text-decoration: underline;
    line-height: 2.5rem;
    text-underline-offset: 10px;
`;
/* tslint:enable */

const TitledContent = styled.article`
    width: ${props => props.theme.appWidth}px;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 60vh;
`;

export {
    TitleElement,
    TitledContent
}