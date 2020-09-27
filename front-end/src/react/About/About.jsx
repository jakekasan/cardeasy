import React from "react";
import styled from "styled-components";
import { TitleElement, TitledContent } from "../NewCard/Layout";

const AboutElement = styled.section`
    display: flex;
    flex-direction: column;
`;

const AboutTitle = styled.h3`
    margin: 0;
    padding: 20px;
    flex: 1 0 100%;
`;

const AboutSection = styled.div`
    flex: 1 1 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 1px solid grey;
    margin: 20px 0;
`;

const AboutItem = styled(AboutSection)`
    flex: 1 0 200px;
    margin: 10px;
`;

const AboutContent = styled.p`
    padding: 20px;
`;

const WhatWeDo = () => {
    return (
        <AboutSection>
            <AboutTitle>What we do</AboutTitle>
            <AboutItem>
                <AboutTitle>Cards for the otherwise located</AboutTitle>
                <AboutContent>Not in the same place? No problem! Send cards to remote team members!</AboutContent>
            </AboutItem>
            <AboutItem>
                <AboutTitle>No signup necessary</AboutTitle>
                <AboutContent>Hate making new accounts? So do we. No need to create a password.</AboutContent>
            </AboutItem>
            <AboutItem>
                <AboutTitle>No cost</AboutTitle>
                <AboutContent>This service is entirely free. Forever.</AboutContent>
            </AboutItem>
        </AboutSection>
    )
}

const HowItWorks = () => {
    return (
        <AboutSection>
            <AboutTitle>How it works</AboutTitle>
            <AboutItem>
                <AboutTitle>1. You create your card</AboutTitle>
                <AboutContent>Choose a design, occasion and who you'd like to sign it before it gets sent.</AboutContent>
            </AboutItem>
            <AboutItem>
                <AboutTitle>2. Everyone signs it</AboutTitle>
                <AboutContent>Each collaborator will get an email with a link that will let them write their own message on the card.</AboutContent>
            </AboutItem>
            <AboutItem>
                <AboutTitle>3. The card gets delivered</AboutTitle>
                <AboutContent>On the date of your choosing, the card will get sent to the recipient and they'll be able to view it on this site.</AboutContent>
            </AboutItem>
        </AboutSection>
    )
}

const About = () => {
    return (
        <TitledContent>
            <TitleElement>A little bit about us...</TitleElement>
            <AboutElement>
                <WhatWeDo />
                <HowItWorks />
            </AboutElement>
        </TitledContent>
    )
}

export default About;