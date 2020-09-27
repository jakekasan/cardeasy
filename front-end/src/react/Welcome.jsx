import React from "react";
import styled from "styled-components";

const WelcomePage = styled.article`
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const WelcomeTitle = styled.h1`
    font-size: 2rem;
    margin: 50px;
    padding: 0;
`;

const WelcomeContent = styled.section`
    flex: 1 0 0;
`;

const Welcome = () => {
    return (
        <WelcomePage>
            <WelcomeTitle>
                Welcome to Cardeasy!
            </WelcomeTitle>
            <WelcomeContent>
                <p>
                    This is some text floating in the middle.
                </p>
            </WelcomeContent>
        </WelcomePage>
    )
}

export default Welcome;
